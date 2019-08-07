const colorLookup = {
  get: (target, attr) => {
    if (typeof target[attr] === 'object' && target[attr] !== null) {
      return new Proxy(target[attr], colorLookup);
    } else if (attr in target) {
      return target[attr];
    } else {
      return attr;
    }
  },
};

const Colors = {
  base: {
    pageBackground  : '#D7D7D7',
    background      : 'white',
    primaryText     : '#414245',
    transparentWhite: 'rgba(256, 256, 256, 0)',
    transparentBlack: 'rgba(0, 0, 0, 1)',
  },
  atlanta: {
    primary  : '#C4C4C4',
    secondary: '#910F1B',
    tertiary : '#323232',
  },
  boston: {
    primary  : '#174B97',
    secondary: '#EFDF00',
    tertiary : '#000000',
  },
  chengdue: {
    primary  : '#FFA000',
    secondary: '#BF926A',
    tertiary : '#161823',
  },
  dallas: {
    primary  : '#032340',
    secondary: '#0072CE',
    tertiary : '#9EA2A2',
  },
  miami: {
    primary  : '#FEDB00',
    secondary: '#AF272F',
    tertiary : '#000000',
  },
  lagladiators: {
    primary  : '#3C1053',
    secondary: '#000000',
    tertiary : '#FFFFFF',
  },
  guangzhou: {
    primary  : '#122C42',
    secondary: '#67A2B2',
    tertiary : '#0FEFD9',
  },
  houston: {
    primary  : '#97DD00',
    secondary: '#000000',
    tertiary : '#FFFFFF',
  },
  hanzhou: {
    primary  : '#FB7299',
    secondary: '#5788CE',
    tertiary : '#FFFFFF',
  },
  london: {
    primary  : '#59CBE8',
    secondary: '#FF8200',
    tertiary : '#1C2B39',
  },
  newyork: {
    primary  : '#171C38',
    secondary: '#0F57EA',
    tertiary : '#FF1C26',
  },
  paris: {
    primary  : '#303D56',
    secondary: '#8D042D',
    tertiary : '#FFAA1D',
  },
  philidelphia: {
    primary  : '#FF9E1B',
    secondary: '#000000',
    tertiary : '#FFFFFF',
  },
  seoul: {
    primary  : '#000000',
    secondary: '#AA8A00',
    tertiary : '#FFFFFF',
  },
  sanfransisco: {
    primary  : '#FC4C02',
    secondary: '#75787B',
    tertiary : '#CAB64B',
  },
  shanghai: {
    primary  : '#D22630',
    secondary: '#000000',
    tertiary : '#FCE300',
  },
  toronto: {
    primary  : '#000000',
    secondary: '#C10021',
    tertiary : '#91A1AF',
  },
  losangeles: {
    primary  : '#4A7729',
    secondary: '#000000',
    tertiary : '#D9C756',
  },
  vancouver: {
    primary  : '#09226B',
    secondary: '#2FB228',
    tertiary : '#FFFFFF',
  },
  washington: {
    primary  : '#990034',
    secondary: '#003768',
    tertiary : '#FFFFFF',
  },
};

export default new Proxy(Colors, colorLookup);
