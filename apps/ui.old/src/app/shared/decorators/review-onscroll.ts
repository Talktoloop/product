export const ReviewOnScroll = (windowScroll = true) => {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (): void {
      // eslint-disable-next-line
      const eventTarget = arguments[0]?.target;
      const scrolledToBottom = eventTarget?.scrollHeight - eventTarget?.clientHeight === eventTarget?.scrollTop;
      const scrolledToTop = eventTarget?.scrollTop === 0;
      if (windowScroll) {
        if (scrolledToBottom && !this.scrolledToBottom) {
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrolledToTop) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
      this.scrolledToBottom = scrolledToBottom;
      this.contentScrolled = !!eventTarget?.scrollTop;
      // eslint-disable-next-line
      originalMethod.apply(this, arguments);
    };
    return descriptor;
  };
};
