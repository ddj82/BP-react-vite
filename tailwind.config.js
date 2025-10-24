/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class", // 다크모드 클래스 방식
    theme: {
        extend: {
            colors: {},
            textColor: {},
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        function ({ addUtilities }) {
            addUtilities({
                '.scrollbar-hidden': {
                    /* 크로스 브라우저 스크롤바 숨기기 */
                    'scrollbar-width': 'none', /* Firefox */
                    '&::-webkit-scrollbar': {
                        display: 'none', /* Chrome, Safari */
                    },
                },
                '.flex-center': {
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                },
                '.font-title': {
                    fontWeight: 'bold',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                },
                '.text-xxs': {
                    fontSize: '0.6rem',
                    lineHeight: '1rem',
                },
                '.text-xxxs': {
                    fontSize: '0.3rem',
                    lineHeight: '0.4rem',
                },
                '.text-xxl': {
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                },
                '.text-xxxl': {
                    fontSize: '2rem',
                    lineHeight: '2.5rem',
                },
            });
        },
    ],
}
