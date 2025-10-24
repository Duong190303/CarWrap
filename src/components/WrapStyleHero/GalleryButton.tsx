'use client';

import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';
import Link from 'next/link';

export function GalleryButton({ href = '/gallery' }: { href?: string }) {
  return (
    <Button
      component={Link}
      href={href}
      size="md"
      radius="md"
      leftSection={<IconPhoto size={18} />}
      color="yellow"
      fw={700}
    >
      GALLERY
    </Button>
  );
}
