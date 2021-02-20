module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    compact: true,
    presets: [
      ['@babel/preset-env', {
        loose: true,
        modules: false,
        corejs: { version: 3 },
        useBuiltIns: 'entry',
        exclude: ['transform-typeof-symbol'],
      }],
      ['@babel/preset-react', {
        development: process.env.NODE_ENV !== 'production',
        useBuiltIns: true,
      }],
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties', {
        loose: true,
      }],
      ['@babel/plugin-proposal-object-rest-spread', {
        loose: true,
      }],
      ['@babel/plugin-transform-runtime', {
        corejs: false,
        helpers: true,
        // eslint-disable-next-line global-require
        version: require('@babel/runtime/package.json').version,
        regenerator: true,
        useESModules: process.env.NODE_ENV !== 'test',
        absoluteRuntime: require.resolve('@babel/runtime/package.json'),
      }],
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
    env: {
      test: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
        ],
      },
      development: {
        plugins: [
          'react-refresh/babel',
        ],
      },
      production: {
        plugins: [
          ['transform-react-remove-prop-types', {
            removeImport: true,
          }],
        ],
      },
    },
  };
};
