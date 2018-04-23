import {generateAuralUpdate, restartGame, makeGuess} from './actions';
import reducer from './reducer';

describe('reducer', () => {
	let state = {
	    guesses: [],
	    feedback: 'Make your guess!',
	    auralStatus: '',
	    correctAnswer: Math.round(Math.random() * 100) + 1
	};

	it('should set the initial state when nothing is passed', () => {
		const state = reducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual({
			guesses: [],
    		feedback: 'Make your guess!',
    		auralStatus: '',
    		correctAnswer: state.correctAnswer
		});
	}); {/* should set the initial state when nothing is passed */}

	it('should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    }); {/* should return the current state on an unknown action */}

   	it('restart game', () => {
	   	let state = {
	    		guesses : [3,6,9],
	    		feedback : 'cold',
	    		correctAnswer : 54
	    	};
    	
    	state = reducer(state, {type: 'RESTART_GAME', correctAnswer:85});
    	expect(state).toEqual({
			guesses: [],
   			feedback: 'Make your guess!',
    		auralStatus: '',
    		correctAnswer: state.correctAnswer
		});
    }); {/* restart game*/}

    it('make guess', () => {
    	let state = {
    		guesses: [],
    		feedback: '',
    		correctAnswer: 54
    	}
    	state = reducer(state, makeGuess(32));
    	expect(state.guesses).toEqual([32]);
    	expect(state.feedback).toEqual(`You're Warm.`);

    	state = reducer(state, makeGuess(60));
    	expect(state.guesses).toEqual([32, 60]);
    	expect(state.feedback).toEqual(`You're Hot!`);

    	state = reducer(state, makeGuess(54));
    	expect(state.guesses).toEqual([32, 60, 54]);
    	expect(state.feedback).toEqual(`You got it!`);
    }); {/* make guess */}
});