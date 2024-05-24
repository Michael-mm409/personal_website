document.getElementById('search-engine').addEventListener('change', function() {
    let form = document.getElementById('search-form');
    let img = document.getElementById('search-engine-logo');
    let input = document.getElementById('search-input')
    let image_path = 'images/Email'
    form.action = this.value;

    // Update the logo based on the selected search engine
    switch(this.value) {
        case 'https://www.google.com.au/search':
            img.src = `${image_path}/google_logo.png`;
            img.alt = 'Google Logo';
            input.placeholder = 'Search Google...';
            break;
        case 'https://search.brave.com/search':
            img.src = `${image_path}/brave_logo.webp`;
            img.alt = 'Brave Browser Logo';
            input.placeholder = 'Search Brave...';
            break;
        case 'https://bing.com/search':
            img.src = `${image_path}/bing_logo.png`; // Update the path to Bing logo
            img.alt = 'Bing Logo';
            input.placeholder = 'Search Bing...';
            break;
        case 'https://www.ecosia.org/search':
            img.src = `${image_path}/ecosia_logo.png`;
            img.alt = 'Ecosia Logo';
            input.placeholder = 'Search Ecosia...';
            break;
        case 'https://search.yahoo.com/search':
            img.src = `${image_path}/yahoo_logo.png`;
            img.alt = 'Yahoo Logo';
            input.placeholder = 'Search Yahoo...';
            break;
        case 'https://duckduckgo.com':
            img.src = `${image_path}/duckduckgo_logo.png`;
            img.alt = 'Duck Duck Go Logo';
            input.placeholder = 'Search Duck Duck Go...';
            break;
        default:
            img.src = `${image_path}/brave_logo.webp`;
            img.alt = 'Brave Browser Logo';
            input.placeholder = 'Search Brave...';
    }
    console.log(img.src);
    console.log(img.width, img.height);
})