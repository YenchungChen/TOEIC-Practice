var tp = new ToeicPractice();

describe('TOEIC Practice',function(){
  tp.test();
  describe('Check Data',function(){
    it('Question loaded',function(){
      tp.getQuestion();
      assert.notEqual(null,document.querySelector('#question').innerHTML);
    })
    it('Option - A loaded',function(){
      tp.getQuestion();
      assert.notEqual(null,document.querySelector('#option1').innerHTML);
    })
    it('Option - B loaded',function(){
      tp.getQuestion();
      assert.notEqual(null,document.querySelector('#option2').innerHTML);
    })
    it('Option - C loaded',function(){
      tp.getQuestion();
      assert.notEqual(null,document.querySelector('#option3').innerHTML);
    })
    it('Option - D loaded',function(){
      tp.getQuestion();
      assert.notEqual(null,document.querySelector('#option4').innerHTML);
    })
  })
  describe('Check Initial Status',function(){
    tp.reset();
    it('Answered question',function(){
      assert.equal('0',tp.answerd);
    })
    it('Correct question',function(){
      assert.equal('0',tp.correct);
    })
    it('Current Scores',function(){
      assert.equal(document.querySelector('#cs').innerHTML,'Current Scores: ');
    })
    it('Correct Rate',function(){
      assert.equal(document.querySelector('#cr').innerHTML,'Correct Rate: ');
    })
  })
})