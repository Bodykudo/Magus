'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure('2fb6fefc-b55b-4ee8-9bdd-9f40d8c18c5e');
  }, []);

  return null;
}
