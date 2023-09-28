"use client";

import { RecentEnrollmentsSection } from "@/components/admin/RecentEnrollmentsSection";
import { SummarySection } from "@/components/admin/SummarySection";
import { Stack } from "@mantine/core";

export default function AdminPage() {
  return (
    <Stack>
      <SummarySection />
      <RecentEnrollmentsSection />
    </Stack>
  );
}
