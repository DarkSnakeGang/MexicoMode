if(window.snake)snake.mexico_mode = function() {

    const scripts = document.getElementsByTagName('script');
    for(let script of scripts) {
      if(script.src === '' || script.src.includes('apis.google.com'))continue;
      const req = new XMLHttpRequest();
      req.open('GET', script.src);
      req.onload = function() {
        const code = this.responseText;
        if(code.indexOf('trophy') === -1)return;
      
      eval(
          code.replace(
            `this.Pb = [];`
          )
        );
      eval(
          code.replace(
            `        this.Pb = [

                {
                    "Gm": false,
                    "Iy": -1,
                    "Mb": {
                        "x": 1,
                        "y": 1
                    },
                    "kI": false
                },
                {
                    "Gm": false,
                    "Iy": -1,
                    "Mb": {
                        "x": 2,
                        "y": 1
                    },
                    "kI": false
                }
            ];`
          )
        );
      };
      req.send();
    }
  };