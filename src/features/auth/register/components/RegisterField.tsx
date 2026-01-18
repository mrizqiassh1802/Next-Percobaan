import { FieldSet, Field, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

export default function RegisterField() {
  return (
    <FieldSet className="w-3/4">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" type="text" />
        </Field>
        <Field>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <Input id="city" type="text" />
        </Field>
        <Field>
          <FieldLabel htmlFor="socmed">Social Media Link</FieldLabel>
          <Input id="socmed" type="text" />
        </Field>
        <Field>
          <FieldLabel htmlFor="followers">Followers</FieldLabel>
          <Input id="followers" type="text" />
        </Field>
        <Field>
          <FieldLabel htmlFor="photo">Attach Photo</FieldLabel>
          <Input id="photo" type="file" />
        </Field>
        <Field>
          <FieldLabel htmlFor="category">Category</FieldLabel>
          <Input id="category" type="text" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="text" />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="text" />
        </Field>
        <FieldSeparator />
        <Field>
          <Button>Submit</Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
