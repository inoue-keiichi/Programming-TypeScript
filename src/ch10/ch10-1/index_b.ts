type Country = 'JP' | 'US' | 'AUS' | 'EN';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Country {
    export function getLanguage(country: Country): string[] {
        switch (country) {
            case 'JP':
                return ['Japanese'];
            case 'US':
            case 'AUS':
            case 'EN':
                return ['English'];
        }
    }
}
