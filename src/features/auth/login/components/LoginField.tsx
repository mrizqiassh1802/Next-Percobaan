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

export default function LoginField() {
  return (
    <FieldSet className="w-3/4">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" type="text" />
          <FieldDescription>Masukan username anda</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" />
          <FieldDescription>Masukan password anda</FieldDescription>
        </Field>
        <FieldSeparator />
        <Field>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
