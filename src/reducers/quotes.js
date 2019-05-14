export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE': // mutates state
      let upvoteQuote = {...state.find(quote => quote.id === action.quoteId)}
      upvoteQuote.votes++
      const newState = state.filter(quote => quote.id !== action.quoteId)
      return [...newState, upvoteQuote]
    case 'DOWNVOTE_QUOTE':
      let downvoteQuote = {...state.find(quote => quote.id === action.quoteId)}
      downvoteQuote.votes > 0 ? downvoteQuote.votes-- : null
      const stateWithoutDownvote = state.filter(quote => quote.id !== action.quoteId)
      return [...stateWithoutDownvote, downvoteQuote]
    default:
      return state;
  }
}
