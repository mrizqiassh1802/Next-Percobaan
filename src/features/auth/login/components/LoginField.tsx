import {
  FieldSet,
  FieldGroup,
  FieldLabel,
  Field,
  FieldDescription,
  FieldSeparator,
} from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import Link from 'next/link';

export default function LoginField() {
  return (
    <FieldSet className="w-3/4 md:w-1/3">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" type="text" />
          <FieldDescription className="sr-only"></FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" />
          <FieldDescription className="sr-only"></FieldDescription>
        </Field>
        <FieldSeparator />
        <Field>
          <Button type="submit">Submit</Button>
          <FieldDescription>
            Belum punya akun? <Link href="/auth/register">Daftar sekarang!</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
