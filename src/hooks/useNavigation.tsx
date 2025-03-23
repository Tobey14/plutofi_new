import { useRouter } from 'next/router';

export const useNavigation = () => {
  const { push, pathname, back, query } = useRouter();

  const navigateToHome = () => {
    push(`/`, `/`);
  };

  const navigateToAbout = () => {
    push(`/about`, `/about`);
  };

  const navigateToFaq = () => {
    push(`/faq`, `/faq`);
  };

  const navigateToContact = () => {
    push(`/contact`, `/contact`);
  };

  const navigateToCookiePolicy = () => {
    push(`/cookie-policy`, `/cookie-policy`);
  };

  const navigateToRefundReturn = () => {
    push(`/return-refund`, `/return-refund`);
  };

  const navigateToTerms = () => {
    push(`/terms-and-conditions`, `/terms-and-conditions`);
  };


  const navigateToPrivacyPolicy = () => {
    push(`/privacy-policy`, `/privacy-policy`);
  };




  const navigateBack = () => back();

  return {
    navigateBack,
    pathname,
    query,
    navigateToHome,
    navigateToAbout,
    navigateToFaq,
    navigateToTerms,
    navigateToPrivacyPolicy,
    navigateToContact,
    navigateToCookiePolicy,
    navigateToRefundReturn
  };
};
