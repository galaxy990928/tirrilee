# 슬라이드 만들기
=> 이전단계와 다음단계라는 버튼을 보고 맨 처음 생각난 것은 바로 슬라이드였습니다.
=> 예전에 혼자 클론코딩할때 정말 힘들게 스스로 슬라이드를 구현한 후에 머리속에 저장되어 있던 슬라이드 기술을
=> 여기서 쓰게 되어 매우 좋았습니다. 
=> 동작원리는 슬라이드 개수만큼의 큰 도화지를 만들고, 각각의 슬라이드를 가로로 배열한 다음에
=> 오른쪽이나 왼쪽을 left css로 넘기는 방식을 채택했습니다.
=> 그런데 그렇게 했을 때 한가지 문제점이 발생했습니다.
=> 그 문제점이란 화면을 작게했다가 크게 했을 경우, left에서 계산식이 page(페이지 번호) * width(현재 화면의 창 넓이)였는데
=> 제가 의도한 것은 page가 변화되었을때만 슬라이드를 하는 것이였습니다.
=> 그러나 화면의 크기가 변경되면서 width가 변경되었고 이로인해 화면을 줄였다 키웠을 경우 슬라이드 현상이 발생했습니다.
=> 따라서 화면을 줄였다 키웠을 경우, 혹은 갑자기 화면이 변경된 경우에는 transition값을 none으로 주어 이 점을 해결했습니다.

# 한 페이지에 모든 슬라이드를 집어넣을까? 아니면 슬라이드마다 파일을 만들까?
=> 메인페이지에서 한번에 모든 슬라이드를 만드는게 원래는 대부분이지만, 여기서는 각각의 단계마다 공통되는 점은 있지만,
=> 정확히 같은 요소가 반복된다고 볼 수 없습니다. 만약 같은 요소가 반복된다면, 그 슬라이드 하나만 만들고 배열로 값을 넣어주면 되지만,
=> 여기서는 각각의 슬라이드를 따로 만들어줘야 했습니다. 그래야만 나중에 수정, 확장이 용이할 것이라 생각해 그렇게 진행했습니다.

# 중복을 피하려면 어떻게 해야 할까?
=> 프로그래머는 항상 중복 되는 코드를 어떻게 피해야 할 지 생각해야만 합니다.
=> 여기서 슬라이드마다 형식이 완전히 똑같지는 않지만, 버튼이 반복되는게 많습니다.
=> 따라서 각각의 글씨는 따로 넣되, 버튼들은 모두 common이란 폴더 안에 넣어두었습니다.
=> 그래서 각각 슬라이드를 만들 때, 따로따로 일일히 만들어 복사/붙여넣기를 하기 보다는
=> 그냥 common에서 각각의 요소들을 들고와 사용해서 시간을 단축했습니다.
