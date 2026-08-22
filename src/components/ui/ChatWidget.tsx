"use client";

import { useEffect } from "react";

interface TawkToProps {
  propertyId: string;
  widgetId: string;
}

declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      onChatStarted?: () => void;
      onChatEnded?: () => void;
      minimize?: () => void;
      maximize?: () => void;
      toggle?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

export function TawkChat({ propertyId, widgetId }: TawkToProps) {
  useEffect(() => {
    const loadTawk = () => {
      // Check if already loaded
      if (typeof window !== "undefined" && window.Tawk_API) {
        return;
      }

      // Initialize Tawk.to
      if (typeof window !== "undefined") {
        window.Tawk_LoadStart = new Date();

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        const firstScript = document.getElementsByTagName("script")[0];
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        }
      }
    };

    loadTawk();
  }, [propertyId, widgetId]);

  return null;
}

// Alternative: Intercom widget
interface IntercomProps {
  appId: string;
}

export function IntercomChat({ appId }: IntercomProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load Intercom
    const w = window as any;
    w.intercomSettings = {
      app_id: appId,
    };

    // Load Intercom script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://widget.intercom.io/widget/${appId}`;
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Cleanup
    return () => {
      const iframe = document.querySelector("iframe[title='Intercom Live Chat']");
      if (iframe) {
        iframe.remove();
      }
    };
  }, [appId]);

  return null;
}

// Generic chat widget wrapper
export function ChatWidget() {
  const TAWK_PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || "your-property-id";
  const TAWK_WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || "your-widget-id";

  useEffect(() => {
    // Only load in production
    if (process.env.NODE_ENV === "production") {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.head.appendChild(script);
    }
  }, [TAWK_PROPERTY_ID, TAWK_WIDGET_ID]);

  return null;
}
