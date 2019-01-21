const axios = require('axios');
async function getHeart(id) {
    const url2 = 'http://localhost:4200/api/vote/state/'+id;
    const url3 = 'http://localhost:4200/api/vote/total/'+id;
    const [votestate, totalvote] = await Promise.all([
      axios.get(url2),
      axios.get(url3)
    ]);
    const data = {
            votestate: votestate.data.votestate,
            totalvote: totalvote.data.count 
    }
return data;
}
export default getHeart;