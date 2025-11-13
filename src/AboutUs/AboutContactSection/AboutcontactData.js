export const AboutContactSection = {
  eyebrow: 'Contact us',
  title: 'About us info',
  body:
    'It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here.',
  buttonLabel: 'CLICK HERE TO CONTACT US',
  buttonHref: '#',
};
export const AboutcontactData = () => {
  try {
    if (!AboutContactSection || typeof AboutContactSection !== 'object') {
      throw new Error('Invalid contact section data');
    }
    return AboutContactSection;
  } catch (err) {
    return {
      eyebrow: 'N/A',
      title: 'Missing content',
      body: 'Content failed to load.',
      buttonLabel: 'Retry',
      buttonHref: '#',
    };
  }
};
