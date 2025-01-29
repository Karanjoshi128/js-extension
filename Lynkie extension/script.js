const socialLinks = [
    { id: 'linkedin', url: 'https://www.linkedin.com/in/karan-joshi-a70740271/' },
    { id: 'github', url: 'https://github.com/Karanjoshi128' },
    { id: 'twitter', url: 'https://twitter.com/KaranJoshi128' },
    { id: 'instagram', url: 'https://www.instagram.com/nasty0970/' },
    { id: 'linkedin2', url: 'https://www.linkedin.com/in/karan-joshi-a70740271/' },
    { id: 'github2', url: 'https://github.com/Karanjoshi128' },
    { id: 'twitter2', url: 'https://twitter.com/KaranJoshi128' },
    { id: 'instagram2', url: 'https://www.instagram.com/nasty0970/' }
];

socialLinks.forEach(link => {
    const element = document.getElementById(link.id);
    if (element) {
        element.addEventListener('dblclick', () => {
            window.open(link.url);
        });
    }
});


socialLinks.forEach(link => {
    const element = document.getElementById(link.id);
    if (element) {
        element.addEventListener('click', () => {
            navigator.clipboard.writeText(link.url).then(() => {
                console.log('URL copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy URL: ', err);
            });
        });
    }
});