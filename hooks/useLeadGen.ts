"use client";

import { useState, useEffect, useCallback } from "react";

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const getCookie = (name: string) => {
  if (typeof document === "undefined") return "";
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
};

export function useLeadGen() {
  const [hasSubmittedLead, setHasSubmittedLead] = useState(false);
  const [hasDismissedPopup, setHasDismissedPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [draftEmail, setDraftEmail] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasSubmittedLead(getCookie("tribetek_lead_submitted") === "true");
      setHasDismissedPopup(getCookie("tribetek_popup_dismissed") === "true");
      setDraftEmail(localStorage.getItem("tribetek_draft_email") || "");
      setIsInitialized(true);
    }
  }, []);

  const handleDraftEmailChange = useCallback((email: string) => {
    setDraftEmail(email);
    if (typeof window !== "undefined") {
      localStorage.setItem("tribetek_draft_email", email);
    }
  }, []);

  const submitLead = useCallback((email: string) => {
    setCookie("tribetek_lead_submitted", "true", 365);
    setHasSubmittedLead(true);
    setShowPopup(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("tribetek_draft_email");
    }
    // Simulate API call
    console.log("Lead submitted:", email);
  }, []);

  const dismissPopup = useCallback(() => {
    setCookie("tribetek_popup_dismissed", "true", 7);
    setHasDismissedPopup(true);
    setShowPopup(false);
  }, []);

  const triggerPopup = useCallback(() => {
    if (!hasSubmittedLead && !hasDismissedPopup) {
      setShowPopup(true);
    }
  }, [hasSubmittedLead, hasDismissedPopup]);

  return {
    isInitialized,
    hasSubmittedLead,
    hasDismissedPopup,
    showPopup,
    setShowPopup,
    draftEmail,
    setDraftEmail: handleDraftEmailChange,
    submitLead,
    dismissPopup,
    triggerPopup,
  };
}
