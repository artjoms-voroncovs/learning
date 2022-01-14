import {ContactUsComponent} from './contact-us/contact-us.component';

export function checkDirtyState(contactUsComponent: ContactUsComponent) {
  const isDirty = contactUsComponent.isDirty;
  if (isDirty) {
    return window.confirm('Data will be lost, are you sure you want proceed?');
  }
  return true;
}
