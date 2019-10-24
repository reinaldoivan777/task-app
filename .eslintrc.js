module.exports = {
    env: {
        amd: true,
        browser: true,
        es6: true
    },
    extends: ['eslint:recommended', 'google', 'prettier', 'prettier/react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', 'prettier', 'babel'],
    rules: {
        'no-console': 0,
        'require-jsdoc': 0,
        indent: ['error', 4, { SwitchCase: 1 }],
        'react/jsx-indent': [2, 4],
        'react/jsx-uses-vars': 2,
        'react/jsx-uses-react': 2,
        'react/react-in-jsx-scope': 2,
        'jsx-quotes': [2, 'prefer-single'],
        quotes: [2, 'single', 'avoid-escape'],
        semi: [2, 'always'],
        'no-process-env': 0,
        'react/jsx-pascal-case': 2,
        'react/jsx-fragments': [2, 'element'],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx']
            }
        ],
        'no-invalid-this': 0,
        'babel/no-invalid-this': 1,
        'prettier/prettier': 'error'
    },
    parser: 'babel-eslint',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        global: true,
        window: true,
        document: true,
        localStorage: true,
        FormData: true,
        FileReader: true,
        Blob: true,
        navigator: true,
        module: true,
        process: true,
        __dirname: true
    }
};
