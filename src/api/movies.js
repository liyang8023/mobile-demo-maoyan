
import axios from 'axios'

// 正在热映电仪列表查询
export function queryShowingList () {
  return axios.get('/movies/showingList/query')
}
