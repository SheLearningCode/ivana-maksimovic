export default function (api) {
    api.cache(true);
    return {
        plugins: [
            'macros',
            '@babel/plugin-transform-private-property-in-object'
        ],

    }
}