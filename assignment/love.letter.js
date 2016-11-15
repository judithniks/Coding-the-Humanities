//love.letter.js

var chance = require('chance').Chance();
var wrap = require('word-wrap');
var program = require ('commander');

const first = ['DARLING', 'DEAR', 'HONEY', 'JEWEL'];
const second = ['DUCK', 'LOVE', 'MOPPET', 'SWEETHEART', 'PUMPKIN', 'FLOWER', 'CAKE', 'SWEET PIE'];
const adjectives = ['ADORABLE', 'AFFECTIONATE', 'AMOROUS', 'ANXIOUS', 'ARDENT', 'AVID', 'BREATHLESS', 'BURNING', 'COVETOUS', 'CRAVING', 'CURIOUS', 'DARLING', 'DEAR', 'DEVOTED', 'EAGER', 'EROTIC', 'FERVENT', 'FOND', 'IMPATIENT', 'KEEN', 'LITTLE', 'LOVEABLE', 'LOVESICK', 'LOVING', 'PASSIONATE', 'PRECIOUS', 'SWEET', 'SYMPATHETIC', 'TENDER', 'UNSATISFIED', 'WISTFUL'];
const nouns = ['ADORATION', 'AFFECTION', 'AMBITION', 'APPETITE', 'ARDOUR', 'CHARM', 'DESIRE', 'DEVOTION', 'EAGERNESS', 'ENCHANTMENT', 'ENTHUSIASM', 'FANCY', 'FELLOW FEELING', 'FERVOUR', 'FONDNESS', 'HEART', 'HUNGER', 'INFATUATION', 'LIKING', 'LONGING', 'LOVE', 'LUST', 'PASSION', 'RAPTURE', 'SYMPATHY', 'TENDERNESS', 'THIRST', 'WISH', 'YEARNING'];
const adverbs = ['AFFECTIONATELY', 'ANXIOUSLY', 'ARDENTLY', 'AVIDLY', 'BEAUTIFULLY', 'BREATHLESSLY', 'BURNINGLY', 'COVETOUSLY', 'CURIOUSLY', 'DEVOTEDLY', 'EAGERLY', 'FERVENTLY', 'FONDLY', 'IMPATIENTLY', 'KEENLY', 'LOVINGLY', 'PASSIONATELY', 'SEDUCTIVELY', 'TENDERLY', 'WINNINGLY', 'WISTFULLY'];
const verbs = ['ADORES', 'ATTRACTS', 'CARES FOR', 'CHERISHES', 'CLINGS TO', 'DESIRES','HOLDS DEAR', 'HOPES FOR', 'HUNGERS FOR', 'IS WEDDED TO', 'LIKES', 'LONGS FOR', 'LOVES', 'LUSTS AFTER', 'PANTS FOR', 'PINES FOR', 'PRIZES', 'SIGHS FOR', 'TEMPTS', 'THIRSTS FOR', 'TREASURES', 'WANTS', 'WISHES', 'WOOS', 'YEARNS FOR'];
const goodbyes = ['YOURS TRULY', 'SWEET GOODBYES', 'SWEET KISSES', 'WITH ALL MY LOVING HEART'];


function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length -1});
	return array[index];
}

function maybe(array) {
	if(chance.bool()) {
		return choice(array) + ' '; 
	} else { 
		return '';
	}
}

function or(array)    {
    if(chance.bool()) {
    	return ', WITH ' + subsentence();
    } else { 
    	return '. ';
    }	
}



function greeting() {
	return choice(first) + ' ' + maybe(adjectives) + choice(second) + ',' + '\n';
}

function subsentence() {
	return choice(adjectives) + ' ' + choice(nouns) + '. ';
}

function finalsentence() { 
	return 'MY ' + maybe(adjectives)  + 
	choice(nouns) + ' ' + maybe(adverbs) + choice(verbs) + ' ' +
	'YOUR ' + maybe(adjectives)  + choice(nouns) + or();
}

function goodbye() {
	return choice(goodbyes) + ',';

}


program
	.version('0.1')
	.option('-w, —-width [letter width]')
	.option('-s, —-sentences [number sentences]')
	.parse(process.argv);


var w = parseInt(program.width) || 65;
var s = parseInt(program.sentences) || 5;
var text = '';

for(var i = 0; i < s; i++) {
	text += finalsentence()
};

text += '\n';

console.log('\n\n\n\n');

console.log(greeting());

console.log(wrap(text, {'width': w}));

console.log(wrap(goodbye(), {indent: '						'}));

console.log(wrap('J.M. Niks', {indent: '						'}));

console.log('\n\n\n\n');


//console.error or default should have given: ('There is no love for you!');



	


