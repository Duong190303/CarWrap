'use client';

import { Button } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import Link from 'next/link';

export function BookButton({ href = '/booking' }: { href?: string }) {
  return (
    <Button
      component={Link}
      href={href}
      size="md"
      radius="md"
      leftSection={<IconCalendar size={18} />}
      variant="default"
    >
     BOOKING NOW
    </Button>
  );
}
