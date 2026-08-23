"use client";

import { useSyncExternalStore } from "react";

import type { DateRange } from "@/content/types";
import type { Locale } from "@/i18n/config";

function monthIndex(value: string) {
  const [year = 0, month = 1] = value.split("-").map(Number);
  return year * 12 + month - 1;
}

function currentMonthIndex() {
  const now = new Date();
  return now.getFullYear() * 12 + now.getMonth();
}

function subscribeToDateChange(callback: () => void) {
  const interval = window.setInterval(callback, 24 * 60 * 60 * 1000);
  return () => window.clearInterval(interval);
}

function formatDuration(period: DateRange, locale: Locale, currentMonth: number) {
  const endIndex = period.current ? currentMonth : monthIndex(period.end ?? period.start);
  const totalMonths = Math.max(1, endIndex - monthIndex(period.start) + 1);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: Array<string> = [];

  if (years) {
    parts.push(
      locale === "es"
        ? `${years} ${years === 1 ? "año" : "años"}`
        : `${years} ${years === 1 ? "year" : "years"}`,
    );
  }
  if (months) {
    parts.push(
      locale === "es"
        ? `${months} ${months === 1 ? "mes" : "meses"}`
        : `${months} ${months === 1 ? "month" : "months"}`,
    );
  }

  return parts.join(locale === "es" ? " y " : ", ");
}

export function ExperienceDuration({ locale, period }: { locale: Locale; period: DateRange }) {
  const currentMonth = useSyncExternalStore(subscribeToDateChange, currentMonthIndex, () => -1);
  return currentMonth >= 0 ? (
    <p className="experience-duration">{formatDuration(period, locale, currentMonth)}</p>
  ) : null;
}
