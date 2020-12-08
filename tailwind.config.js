module.exports = {
    purge: [
        './content/**/*.njk',
        './content/**/*.html',
        './assets/scripts/**/*.js',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                header: "'Roboto Condensed', sans-serif",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
