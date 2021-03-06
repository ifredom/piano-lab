
import Vex from 'vexflow'
import { useState, useEffect } from 'react'

function useSample(show) {
    let [canShow, setShow] = useState(show)
    useEffect(() => {
        if (canShow) {
            let vf = new Vex.Flow.Factory({
                renderer: {elementId: 'new-song'}
              });
              let score = vf.EasyScore();
              let system = vf.System();
              
              function writeNote(pitch, rhythm){
                  document.getElementById('score');
              // add additional if statements to include more rhythmic options
                  if (rhythm === '/8') {
                      score.set({time: "1/8"})
                  } else if (rhythm === '/q') {
                      score.set({time: "1/4"});
                  } else if (rhythm === '/h') {
                      score.set({time: "1/2"});
                  }
                  system.addStave({
                      voices: [score.voice(score.notes(pitch + rhythm))]
                  }).addClef('treble');
                  vf.draw();
              }
              
              writeNote('C4', '/h');
        }
        
      }, [])
    return {
        title: '说明',
        content: '这是一个简单的示例'
    }
}

export {
    useSample
}