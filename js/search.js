function handleSearchEngineSelection() {
    const searchForm = document.getElementById('search-form');
    const searchEngineSelect = document.getElementById('search-engine');
    const searchEngineLogo = document.getElementById('search-engine-logo');
    const searchInput = document.getElementById('search-input');

    searchEngineSelect.addEventListener('change', function() {
        const selectedEngine = searchEngineSelect.value;
        searchForm.action = selectedEngine;

        let logoSrc;
        let placeholderText;
        let logoAltText;

        switch (selectedEngine) {
            case 'https://search.brave.com/search':
                logoSrc = 'images/Email/brave_logo.webp';
                placeholderText = 'Search Brave...';
                logoAltText = 'Brave Browser Logo';
                break;
            case 'https://www.google.com.au/search':
                logoSrc = 'images/Email/google_logo.png';
                placeholderText = 'Search Google...';
                logoAltText = 'Google Logo';
                break;
            case 'https://bing.com/search':
                logoSrc = 'images/Email/bing_logo.png';
                placeholderText = 'Search Bing...';
                logoAltText = 'Bing Logo'
                break;
            case 'https://search.yahoo.com/search':
                logoSrc = 'images/Email/yahoo_logo.png';
                placeholderText = 'Search Yahoo...';
                logoAltText = 'Yahoo Logo';
                break;
            case 'https://duckduckgo.com':
                logoSrc = 'images/Email/duckduckgo_logo.png';
                placeholderText = 'Search DuckDuckGo...';
                logoAltText = 'Duck Duck Go Logo';
                break;
            case 'https://www.ecosia.org/search':
                logoSrc = 'images/Email/ecosia_logo.png';
                placeholderText = 'Search Ecosia...';
                logoAltText = 'Ecosia Logo';
                break;
            default:
                logoSrc = 'images/Email/brave_logo.webp';
                placeholderText = 'Search Brave...';
                logoAltText = 'Brave Browser Logo';
        }

        searchEngineLogo.src = logoSrc;
        searchInput.placeholder = placeholderText;
        searchEngineLogo.alt = logoAltText;
    });
};

document.addEventListener('DOMContentLoaded', handleSearchEngineSelection);