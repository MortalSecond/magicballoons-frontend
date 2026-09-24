// Real TripAdvisor reviews, quoted exactly as written, typos included. They are
// never translated: each language build shows reviews written in its language,
// so a quote is always the reviewer's own words.

export interface Review
{
    author: string;
    title: string;
    text: string;
    rating: number;
}

export const REVIEWS: Record<string, Review[]> = {
    es: [
        {
            author: 'Vanessa M',
            title: 'Te reinicia la vida',
            text: '100 recomendable, el personal es muy profesional y te brindan un gran servicio. La experiencia inolvidable',
            rating: 5
        },
        {
            author: 'mariall9425TT',
            title: 'Brutal',
            text: 'Súper atentos, y siempre pensando en la experiencia de nosotras, nos encantó muchísimo. Sin duda volaría con ellos de nuevos',
            rating: 5
        },
        {
            author: 'jennycamilau',
            title: 'La mejor experiencia',
            text: 'Marc nos atendió súper bien. La experiencia estuvo fenomenal, las personas muy amables y las fotos inmejorables! Recomendadísimos!',
            rating: 5
        }
    ],
    en: [
        {
            author: 'Jaden R',
            title: 'Recommend for Solo',
            text: 'It was an awesome experience. Great people and vibes. I really enjoyed as a solo traveler',
            rating: 5
        },
        {
            author: 'Karla M',
            title: 'Magical, the view from the heights was very beautiful.',
            text: 'Very nice and safe, I would recommend it.',
            rating: 5
        },
        {
            author: 'Rosalba M',
            title: 'Magic',
            text: 'Beautiful experience! First time, and the views were worth the wake up!',
            rating: 5
        }
    ]
};
