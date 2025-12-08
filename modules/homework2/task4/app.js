require('./counter');

delete require.cache[require.resolve('./counter')];

require('./counter');
