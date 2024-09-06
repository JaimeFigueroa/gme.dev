module.exports = {
    content: ['src/**/*/*.{astro, html, js, jsx, md}'],
    transform: {
        md: (content) => {
          return remark().process(content)
        }
    },
    theme: {
        extend: {}
    },
    plugins: []
}