const dimensionLookup = {
  get: (target, attr) => {
    if (typeof target[attr] === 'object' && target[attr] !== null) {
      return new Proxy(target[attr], dimensionLookup);
    } else if (attr in target) {
      return target[attr];
    } else {
      return attr;
    }
  },
};

const Dimensions = {
  xxsmall: '.125rem',
  xsmall : '.5rem',
  small  : '1rem',
  medium : '2rem',
  large  : '3rem',
  xlarge : '5rem',
  xxlarge: '8rem',
};

export default new Proxy(Dimensions, dimensionLookup);
