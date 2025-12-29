// TrackMate Pixel Utility
// Provides helper functions for tracking user behavior
// The pixel automatically includes list_id from the data-list attribute

declare global {
  interface Window {
    TM?: {
      identify: (data: TrackMateIdentifyData) => void;
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

export interface TrackMateIdentifyData {
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  [key: string]: string | undefined;
}

export interface TrackMateFormData {
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  [key: string]: string | undefined;
}

/**
 * Identify a user in TrackMate using the pixel
 * The pixel automatically includes list_id from data-list attribute
 * Creates a profile and links all their page views
 */
export function identifyUser(data: TrackMateIdentifyData): void {
  if (typeof window !== 'undefined') {
    // Check if TM is available
    if (window.TM && typeof window.TM.identify === 'function') {
      window.TM.identify({
        email: data.email,
        name: data.name || '',
        phone: data.phone || '',
      });
      console.log('[TrackMate] User identified:', data.email);
    } else {
      console.warn('[TrackMate] TM.identify not available - pixel may not be loaded yet');
    }
  }
}

/**
 * Track a custom event in TrackMate
 */
export function trackEvent(event: string, data?: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && window.TM && typeof window.TM.track === 'function') {
    window.TM.track(event, data);
  }
}

/**
 * Track form submission - identifies user through the pixel
 * The pixel automatically includes list_id from data-list attribute
 */
export function trackFormSubmission(formData: TrackMateFormData, formName: string): void {
  // Identify the user through the pixel (this auto-includes list_id)
  identifyUser({
    email: formData.email,
    name: formData.name,
    phone: formData.phone,
  });

  // Optionally track the form submission as an event
  trackEvent('form_submitted', {
    form_name: formName,
    service: formData.service,
    company: formData.company,
  });
}

/**
 * Initialize scroll tracking
 * Tracks when user scrolls to 25%, 50%, 75%, and 100% of the page
 */
export function initScrollTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const scrollMilestones = {
    25: false,
    50: false,
    75: false,
    100: false,
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / documentHeight) * 100;

    // Track scroll milestones
    if (scrollPercent >= 25 && !scrollMilestones[25]) {
      scrollMilestones[25] = true;
      trackEvent('scroll_depth', { depth: 25, page: window.location.pathname });
    }
    if (scrollPercent >= 50 && !scrollMilestones[50]) {
      scrollMilestones[50] = true;
      trackEvent('scroll_depth', { depth: 50, page: window.location.pathname });
    }
    if (scrollPercent >= 75 && !scrollMilestones[75]) {
      scrollMilestones[75] = true;
      trackEvent('scroll_depth', { depth: 75, page: window.location.pathname });
    }
    if (scrollPercent >= 95 && !scrollMilestones[100]) {
      scrollMilestones[100] = true;
      trackEvent('scroll_depth', { depth: 100, page: window.location.pathname });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Initialize deep scroll tracking
 * Tracks time spent on page combined with scroll depth
 */
export function initDeepScrollTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  let maxScrollDepth = 0;
  let timeOnPage = 0;
  let deepScrollTracked = false;
  const intervalId: NodeJS.Timeout = setInterval(() => {
    timeOnPage += 1;

    // Check for deep engagement periodically
    if (!deepScrollTracked && maxScrollDepth >= 70 && timeOnPage >= 30) {
      deepScrollTracked = true;
      trackEvent('deep_engagement', {
        scroll_depth: maxScrollDepth,
        time_on_page: timeOnPage,
        page: window.location.pathname,
      });
    }
  }, 1000);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

    if (scrollPercent > maxScrollDepth) {
      maxScrollDepth = scrollPercent;
    }

    // Track deep engagement: 70%+ scroll AND 30+ seconds on page
    if (!deepScrollTracked && maxScrollDepth >= 70 && timeOnPage >= 30) {
      deepScrollTracked = true;
      trackEvent('deep_engagement', {
        scroll_depth: maxScrollDepth,
        time_on_page: timeOnPage,
        page: window.location.pathname,
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
    clearInterval(intervalId);
  };
}
