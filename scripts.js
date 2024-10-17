/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {

  let longest = "";
  const split1 = split(str);

  for (let i = 0; i < split1.length; i++) {
      if (split1[i].length > longest.length) {
          longest = split1[i];
      }
  }

  return longest;
}
return null:

}
  //Úfæra
function shortest(str) {

  if (isString(str)) {

  const split1 = split(str);
  let shortest = split1[0];
  

  for (let i = 0; i < split1.length; i++) {
      if (split1[i].length < shortest.length && split1[i] != " ") {
          shortest = split1[i];
      }
    
  }
  return shortest;
}
return null;
}

function reverse(str) {
if (isString(str)) {
  const split = str.split('');
  const reversed = split.reverse();

  return reversed.join('')
}
return null;
  // Útfæra
}
console.assert (reverse('halló') === 'óllah', 'reverse: snýr streng')

// 1. (ekki palindrome) "halló" => false
// 2. (palindrome) "hah" => true
// 3. (óloglegt inntak) null / false / 0 => false
// 4. "" ??? = => true
// 5. "Hah" ??? => true
function palindrome(str) {
  if (isString(str) && str !== '') {
    const reversed = reverse(str);
    return (str.toLowerCase() === reversed.toLowerCase()) 
  }
return false;
}
console.assert (palindrome('halló') === false, 'halló á ekki palindrome')
console.assert (palindrome('hah') === true, 'hah á að vera palindrome')
console.assert (palindrome(null, false, 0) === false, 'ölöglegt inntök')
console.assert (palindrome(' ') === true, 'tóm bil eru líka talinn með')
console.assert (palindrome('Hah') === true, 'á að breyta streng í lágstafi')

function vowels(str) {
  let vowelsCount = 0;
    
  for (let char of str) {
      if (VOWELS.includes(char)) {
          vowelsCount++;
      }
  }

  return vowelsCount;
}
  // Útfæra

function consonants(str) {
  let consonantCount = 0;
    
    for (let char of str) {
        if (CONSONANTS.includes(char)) {
            consonantCount++;
        }
    }

    return consonantCount;
}
console.assert(consonants("aaab") === 1, "á að vera einn samhljóða")
console.assert(consonants("") === 0, "ef það er tómt er 0")
  // Útfæra


//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}
