const availableSectors = {
    //'Retail Trade'
    //'Energy Minerals',
    //'Health Services',
    // 'Utilities',
    // 'Finance',
    // 'Consumer Services',
    // 'Consumer Non-Durables',
    // 'Non-Energy Minerals',
    // 'Commercial Services',
    // 'Distribution Services',
    // 'Transportation',
    // 'Technology Services',
    // 'Process Industries',
    // 'Communications',
    // 'Producer Manufacturing',
    // 'Miscellaneous',
    // 'Electronic Technology',
    // 'Industrial Services',
    // 'Health Technology',
    // 'Consumer Durables'
    'Financial Services': 'Finance',
    'Basic Materials': 'Consumer Durables',
    'Utilities': 'Utilities',
    'Real Estate': 'Miscellaneous'
}

export default function convertAvailableServices(sector) {
    if (availableSectors[sector]) {
        return availableSectors[sector]
    };
    return null
}