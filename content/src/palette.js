define(function() {

function filterblocks(a) {
  // Show 'say' block only on browsers that support speech synthesis.
  if (!window.SpeechSynthesisUtterance || !window.speechSynthesis) {
    a = a.filter(function(b) { return !/^say\b/.test(b.block); });
  }
  return a.map(function(e) {
    if (!e.id) {
      e.id = e.block.replace(/\W..*$/, '');
    }
    return e;
  });
}

return {

  // The following palette description
  // is copied from compiled CoffeeScript.
  COFFEESCRIPT_PALETTE: [
    {
      name: 'Move',
      color: 'quantumlightblue',
      blocks: filterblocks([
        {
          block: 'fd 100',
          title: 'Move forward'
        }, {
          block: 'rt 90',
          title: 'Turn right'
        }, {
          block: 'lt 90',
          title: 'Turn left'
        }, {
          block: 'bk 100',
          title: 'Move backward'
        }, {
          block: 'rt 180, 100',
          title: 'Make a wide right arc'
        }, {
          block: 'lt 180, 100',
          title: 'Make a wide left arc'
        }, {
          block: 'speed 10',
          title: 'Set the speed of the turtle'
        }, {
          block: 'speed Infinity',
          title: 'Use infinite speed'
        }, {
          block: 'home()',
          title: 'Jump to the origin, turned up'
        }, {
          block: 'turnto 270',
          title: 'Turn to an absolute direction'
        }, {
          block: 'turnto lastclick',
          title: 'Turn toward a located object'
        }, {
          block: 'moveto 100, 50',
          title: 'Move to coordinates'
        }, {
          block: 'movexy 30, 20',
          title: 'Move by changing x and y'
        }, {
          block: 'jumpto 100, 50',
          title: 'Jump to coordinates without drawing'
        }, {
          block: 'jumpxy 30, 20',
          title: 'Jump changing x and y without drawing'
        }
      ])
    }, {
      name: 'Control',
      color: 'quantumyellow',
      blocks: filterblocks([
        {
          block: 'for [1..3]\n  ``',
          title: 'Do something multiple times'
        }, {
          block: 'if `` is ``\n  ``',
          title: 'Do something only if a condition is true'
        }, {
          block: 'if `` is ``\n  ``\nelse\n  ``',
          title:
              'Do something if a condition is true, otherwise something else',
          id: 'ifelse'
        }, {
          block: "forever 1, ->\n  fd 25\n  if not inside window\n    stop()",
          title: 'Repeat something forever at qually-spaced times'
        }, {
          block: "button \'Click\', ->\n  write 'clicked'",
          title: 'Make a button and do something when clicked'
        }, {
          block: "keydown \'X\', ->\n  write 'x pressed'",
          title: 'Do something when a keyboard key is pressed'
        }, {
          block: "click (e) ->\n  moveto e",
          title: 'Move to a location when document is clicked'
        }
      ])
    }, {
      name: 'Art',
      color: 'quantumpurple',
      blocks: filterblocks([
         {
          block: 'pen purple, 10',
          title: 'Set pen color and size'
        }, {
          block: 'dot green, 50',
          title: 'Make a dot'
        }, {
          block: 'box yellow, 50',
          title: 'Make a square'
        }, {
          block: 'fill blue',
          title: 'Fill traced shape'
        }, {
          block: 'wear \'/img/apple\'',
          title: 'Use an image for the turtle'
        }, {
          block: 'scale 3',
          title: 'Scale turtle drawing'
        }, {
          block: 'ht()',
          title: 'Hide the main turtle'
        }, {
          block: 'st()',
          title: 'Show the main turtle'
        }, {
          block: 'cs()',
          title: 'Clear screen'
        }, {
          block: 'pu()',
          title: 'Lift the pen up'
        }, {
          block: 'pd()',
          title: 'Put the pen down'
        }, {
          block: 'drawon s',
          title: 'Draw on sprite s'
        }, {
          block: 'drawon document',
          title: 'Draw on the document'
        }
      ])
    }, {
      name: 'Operators',
      color: 'quantumlightgreen',
      blocks: filterblocks([
        {
          block: 'x = ``',
          title: 'Set a variable',
          id: 'assign'
        }, {
          block: '`` is ``',
          title: 'Compare two values'
        }, {
          block: '`` < ``',
          title: 'Compare two values'
        }, {
          block: '`` > ``',
          title: 'Compare two values'
        }, {
          block: '`` + ``',
          title: 'Add two numbers',
          id: 'add'
        }, {
          block: '`` - ``',
          title: 'Subtract two numbers',
          id: 'subtract'
        }, {
          block: '`` * ``',
          title: 'Multiply two numbers',
          id: 'multiply'
        }, {
          block: '`` / ``',
          title: 'Divide two numbers',
          id: 'divide'
        }, {
          block: 'random 6',
          title: 'Get a random number less than n'
        }, {
          block: 'round ``',
          title: 'Round to the nearest integer'
        }, {
          block: 'abs ``',
          title: 'Absolute value'
        }, {
          block: 'max ``, ``',
          title: 'Get the larger of two numbers'
        }, {
          block: 'min ``, ``',
          title: 'Get the smaller on two numbers'
        }, {
          block: 'x.match /pattern/',
          title: 'Test if a text pattern is found in x'
        }, {
          block: 'f = (x) ->\n  ``',
          title: 'Define a new function'
        }, {
          block: 'f(x)',
          title: 'Use a custom function'
        }
      ])
    }, {
      name: 'Text',
      color: 'quantumpink',
      blocks: filterblocks([
        {
          block: 'write \'Hello.\'',
          title: 'Write text in the document'
        }, {
          block: 'type \'zz*(-.-)*zz\'',
          title: 'Typewrite text in the document'
        }, {
          block: 'label \'spot\'',
          title: 'Write text at the turtle'
        }, {
          block: 'read \'?\', (x) ->\n  write x',
          title: 'Read input from the user'
        }, {
          block: 'readnum \'?\', (x) ->\n  write x',
          title: 'Read a number from the user'
        }, {
          block: 'log [1..10]',
          title: 'Log an object to debug'
        }
      ])
    }, {
      name: 'Sprites',
      color: 'quantumteal',
      blocks: filterblocks([
        {
          block: 't = new Turtle red',
          title: 'Make a new turtle',
          id: 'newturtle'
        }, {
          block: 's = new Sprite',
          title: 'Make a blank sprite',
          id: 'newsprite'
        }, {
          block: 'p = new Piano',
          title: 'Make a visible instrument',
          id: 'newpiano'
        }, {
          block: 'q = new Pencil',
          title: 'Make an invisible and fast drawing sprite'
        }
      ])
    }, {
      name: 'Sound',
      color: 'quantumdeeppurple',
      blocks: filterblocks([
        {
          block: 'p.play \'CDEDC\'',
          title: 'Play and show music notes'
        }
      ])
    }, {
      name: 'Snippets',
      color: 'quantumdeeporange',
      blocks: filterblocks([
        {
          block: "tick 10, ->\n  if pressed 'W'\n    fd 2",
          title: 'Poll a key and move while it is depressed'
        }, {
          block: "click (e) ->\n  moveto e",
          title: 'Move to a location when document is clicked'
        }
      ])
    }
  ],

  JAVASCRIPT_PALETTE: [
    {
      name: 'Draw',
      color: 'blue',
      blocks: [
        {
          block: 'pen(red);',
          title: 'Set the pen color'
        }, {
          block: 'fd(100);',
          title: 'Move forward'
        }, {
          block: 'rt(90);',
          title: 'Turn right'
        }, {
          block: 'lt(90);',
          title: 'Turn left'
        }, {
          block: 'bk(100);',
          title: 'Move backward'
        }, {
          block: 'speed(10);',
          title: 'Set the speed of the turtle'
        }, {
          block: 'dot(blue, 50);',
          title: 'Make a dot'
        }, {
          block: 'box(green, 50);',
          title: 'Make a square'
        }, {
          block: 'write(\'hello\');',
          title: 'Write text on the screen'
        }, {
          block: 'label(\'hello\');',
          title: 'Write text at the turtle'
        }, {
          block: 'ht();',
          title: 'Hide the turtle'
        }, {
          block: 'st();',
          title: 'Show the turtle'
        }, {
          block: 'pu();',
          title: 'Pick the pen up'
        }, {
          block: 'pd();',
          title: 'Put the pen down'
        }, {
          block: 'pen(purple, 10);',
          title: 'Set the pen color and thickness'
        }, {
          block: 'rt(180, 100);',
          title: 'Make a wide right turn'
        }, {
          block: 'lt(180, 100);',
          title: 'Make a wide left turn'
        }, {
          block: 'slide(100, 20);',
          title: 'Slide sideways or diagonally'
        }, {
          block: 'jump(100, 20);',
          title: 'Jump without drawing'
        }, {
          block: 'play(\'GEC\');',
          title: 'Play music notes'
        }, {
          block: 'wear(\'/img/cat-icon\');',
          title: 'Change the turtle image'
        }
      ]
    }, {
      name: 'Control',
      color: 'orange',
      blocks: [
        {
          block: 'for (var i = 0; i < 4; i++) {\n  __;\n}',
          title: 'Do something multiple times'
        }, {
          block: 'if (__) {\n  __;\n}',
          title: 'Do something only if a condition is true'
        }, {
          block: 'if (__) {\n  __;\n} else {\n  __;\n}',
          title: 'Do something if a condition is true, otherwise do something else'
        }, {
          block: 'while (__) {\n  __;\n}',
          title: 'Repeat something while a condition is true'
        }
      ]
    }, {
      name: 'Math',
      color: 'green',
      blocks: [
        {
          block: 'var x = __;',
          title: 'Create a variable for the first time'
        }, {
          block: 'x = __;',
          title: 'Reassign a variable'
        }, {
          block: '__ + __',
          title: 'Add two numbers'
        }, {
          block: '__ - __',
          title: 'Subtract two numbers'
        }, {
          block: '__ * __',
          title: 'Multiply two numbers'
        }, {
          block: '__ / __',
          title: 'Divide two numbers'
        }, {
          block: '__ === __',
          title: 'Compare two numbers'
        }, {
          block: '__ > __',
          title: 'Compare two numbers'
        }, {
          block: '__ < __',
          title: 'Compare two numbers'
        }, {
          block: 'random(1, 100)',
          title: 'Get a random number in a range'
        }, {
          block: 'round(__)',
          title: 'Round to the nearest integer'
        }, {
          block: 'abs(__)',
          title: 'Absolute value'
        }, {
          block: 'max(__, __)',
          title: 'Absolute value'
        }, {
          block: 'min(__, __)',
          title: 'Absolute value'
        }
      ]
    }, {
      name: 'Functions',
      color: 'violet',
      blocks: [
        {
          block: 'function myFunction() {\n  __;\n}',
          title: 'Create a function without an argument'
        }, {
          block: 'function myFunction(n) {\n  __;\n}',
          title: 'Create a function with an argument'
        }, {
          block: 'myFunction()',
          title: 'Use a function without an argument'
        }, {
          block: 'myFunction(n)',
          title: 'Use a function with argument'
        }
      ]
    }
  ],

  KNOWN_FUNCTIONS: {
    fd: {color: '#81d4fa'},
    bk: {color: '#81d4fa'},
    rt: {color: 'quantumlightblue'},
    lt: {color: 'quantumlightblue'},
    slide: {color: 'quantumlightblue'},
    move: {color: 'quantumlightblue'},
    movexy: {color: 'quantumlightblue'},
    moveto: {color: 'quantumlightblue'},
    jump: {color: 'quantumlightblue'},
    jumpxy: {color: 'quantumlightblue'},
    jumpto: {color: 'quantumlightblue'},
    turnto: {color: 'quantumlightblue'},
    home: {color: 'quantumlightblue'},
    pen: {color: 'quantumpurple'},
    fill: {color: 'quantumpurple'},
    dot: {color: 'quantumpurple'},
    box: {color: 'quantumpurple'},
    mirror: {color: 'quantumpurple'},
    twist: {color: 'quantumpurple'},
    scale: {color: 'quantumpurple'},
    pause: {},
    st: {color: 'quantumpurple'},
    ht: {color: 'quantumpurple'},
    cs: {color: 'quantumpurple'},
    cg: {color: 'quantumpurple'},
    ct: {color: 'quantumpurple'},
    pu: {color: 'quantumpurple'},
    pd: {color: 'quantumpurple'},
    pe: {},
    pf: {},
    say: {color: 'quantumdeeppurple'},
    play: {},
    tone: {},
    silence: {},
    speed: {color:'red'},
    wear: {},
    drawon: {},
    label: {color: 'quantumpink'},
    reload: {},
    see: {},
    sync: {},
    send: {},
    recv: {},
    click: {color: 'quantumyellow'},
    mousemove: {color: 'quantumyellow'},
    mouseup: {color: 'quantumyellow'},
    mousedown: {color: 'quantumyellow'},
    keyup: {color: 'quantumyellow'},
    keydown: {color: 'quantumyellow'},
    keypress: {color: 'quantumyellow'},
    alert: {},
    prompt: {},
    done: {},
    tick: {color: 'quantumyellow'},
    forever: {color: 'quantumyellow'},
    stop: {color: 'quantumyellow'},
    type: {color: 'quantumpink'},
    sort: {},
    log: {color: 'quantumpink'},
    abs: {value: true, color: 'quantumlightgreen'},
    acos: {value: true, color: 'quantumlightgreen'},
    asin: {value: true, color: 'quantumlightgreen'},
    atan: {value: true, color: 'quantumlightgreen'},
    atan2: {value: true, color: 'quantumlightgreen'},
    cos: {value: true, color: 'quantumlightgreen'},
    sin: {value: true, color: 'quantumlightgreen'},
    tan: {value: true, color: 'quantumlightgreen'},
    ceil: {value: true, color: 'quantumlightgreen'},
    floor: {value: true, color: 'quantumlightgreen'},
    round: {value: true, color: 'quantumlightgreen'},
    exp: {value: true, color: 'quantumlightgreen'},
    ln: {value: true, color: 'quantumlightgreen'},
    log10: {value: true, color: 'quantumlightgreen'},
    pow: {value: true, color: 'quantumlightgreen'},
    sqrt: {value: true, color: 'quantumlightgreen'},
    max: {value: true, color: 'quantumlightgreen'},
    min: {value: true, color: 'quantumlightgreen'},
    random: {value: true, color: 'quantumlightgreen'},
    pagexy: {value: true},
    getxy: {value: true},
    direction: {value: true},
    distance: {value: true},
    shown: {value: true},
    hidden: {value: true},
    inside: {value: true},
    touches: {value: true},
    within: {value: true},
    notwithin: {value: true},
    nearest: {value: true},
    pressed: {value: true},
    canvas: {value: true},
    hsl: {value: true},
    hsla: {value: true},
    rgb: {value: true},
    rgba: {value: true},
    cell: {value: true},
    '$': {value: true},
    match: {value: true},
    toString: {value: true},
    charCodeAt: {value: true},
    fromCharCode: {value: true},
    exec: {value: true},
    test: {value: true},
    split: {value: true},
    join: {value: true},
    button: {value: true, command: true, color: 'quantumyellow'},
    read: {value: true, command: true, color: 'quantumpink'},
    readstr: {value: true, command: true, color: 'quantumpink'},
    readnum: {value: true, command: true, color: 'quantumpink'},
    write: {value: true, command: true, color: 'quantumpink'},
    table: {value: true, command: true, color: 'yellow'},
    splice: {value: true, command: true},
    append: {value: true, command: true},
    finish: {value: true, command: true},
    loadscript: {value: true, command: true},
    text: {value: true, command: true, color: 'quantumpink'},
    html: {value: true, command: true}
  }
};

});
