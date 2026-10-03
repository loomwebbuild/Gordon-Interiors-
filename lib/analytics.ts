// Analytics & Event Tracking Helper for Gordon Interior

export type TrackingEventType =
  | 'whatsapp_click'
  | 'call_click'
  | 'quote_submit'
  | 'sample_request'
  | 'catalogue_download'
  | 'swatch_select'
  | 'project_view';

export interface TrackingEventData {
  category?: string;
  label?: string;
  value?: string | number;
  product?: string;
  source?: string;
}

export function trackEvent(eventType: TrackingEventType, data?: TrackingEventData) {
  if (typeof window === 'undefined') return;

  // Log in development / evaluation
  console.log(`[GORDON Analytics] ${eventType}:`, data);

  // Google Analytics 4 hook (if configured in production)
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventType, {
      event_category: data?.category || 'engagement',
      event_label: data?.label || '',
      value: data?.value,
      product: data?.product,
      source: data?.source,
    });
  }

  // Meta Pixel hook (if configured in production)
  if (typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === 'function') {
    (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('trackCustom', eventType, data);
  }
}
