// 프롬프트 아이템 더미 데이터
const promptData = [
    {
        id: 1,
        title: "코드 리뷰어",
        description: "작성한 코드를 분석하고 품질, 가독성, 성능 측면에서 개선점을 제안해주는 프롬프트",
        prompt: "당신은 시니어 소프트웨어 엔지니어입니다. 아래 코드를 검토하고 다음 항목별로 피드백을 주세요:\n1. 버그 또는 잠재적 오류\n2. 성능 개선 포인트\n3. 가독성 및 코드 스타일\n4. 보안 취약점 (해당시)\n각 항목은 구체적인 예시 코드와 함께 설명해주세요.\n\n[코드를 여기에 붙여넣으세요]",
        category: "development",
    },
    {
        id: 2,
        title: "UI 피드백 분석가",
        description: "UI/UX 디자인 시안을 사용자 경험 관점에서 평가하고 구체적인 개선 방향을 제시해주는 프롬프트",
        prompt: "당신은 UX 전문가입니다. 아래 디자인 시안을 보고 다음 기준으로 평가해주세요:\n1. 사용성 (직관성, 일관성)\n2. 시각적 계층 구조\n3. 접근성 (색상 대비, 폰트 크기)\n4. 개선 제안 (우선순위 순)\n실제 사용자 관점에서 구체적으로 설명해주세요.\n\n[디자인 설명 또는 이미지를 첨부하세요]",
        category: "design",
    },
    {
        id: 3,
        title: "블로그 포스트 작성기",
        description: "주제와 타깃 독자를 입력하면 SEO를 고려한 구조적인 블로그 글을 작성해주는 프롬프트",
        prompt: "당신은 전문 콘텐츠 작가입니다. 아래 조건에 맞는 블로그 포스트를 작성해주세요:\n- 주제: [주제 입력]\n- 타깃 독자: [독자층 입력]\n- 분량: 약 800~1000자\n- 구성: 훅 → 본론 3단계 → 핵심 정리\n- 톤: 친근하고 명확하게\nSEO를 위한 소제목(H2)을 포함해주세요.",
        category: "writing",
    },
    {
        id: 4,
        title: "뉘앙스 살리는 번역가",
        description: "단순 직역이 아닌 문화적 맥락과 어감을 살려 자연스러운 번역을 제공해주는 프롬프트",
        prompt: "당신은 이중 언어 전문 번역가입니다. 아래 텍스트를 번역할 때:\n1. 원문의 어감과 뉘앙스를 최대한 보존하세요\n2. 직역보다 자연스러운 표현을 우선하세요\n3. 문화적 차이가 있는 표현은 주석으로 설명해주세요\n4. 번역 후 어색한 부분이 있다면 대안 표현도 제시해주세요\n\n번역 방향: [원문 언어] → [목표 언어]\n[번역할 텍스트를 여기에 입력하세요]",
        category: "translation",
    },
];
// chat session 아이템 더미 데이터
const chatSessionData = [
    {
        chatSessionId: 1,
        question: "오늘 서울 날씨 어때?",
        answer: "오늘 서울은 대체로 맑으며 최고 기온은 25도, 최저 기온은 15도입니다. 일교차가 크니 가벼운 외투를 챙기세요.",
        deleted: true,
    },
    {
        chatSessionId: 2,
        question: "Python에서 리스트를 정렬하는 방법 알려줘.",
        answer: "리스트를 정렬하려면 `list.sort()` 메서드를 사용하거나 `sorted()` 함수를 사용할 수 있습니다. 오름차순이 기본이며 reverse=True 옵션으로 내림차순 정렬이 가능합니다.",
        deleted: false,
    },
    {
        chatSessionId: 3,
        question: "맛있는 김치찌개 만드는 비결이 뭐야?",
        answer: "잘 익은 김치를 돼지고기와 함께 충분히 볶은 뒤, 쌀뜨물을 육수로 사용하고 마지막에 설탕 한 꼬집을 넣으면 신맛을 잡아주어 감칠맛이 살아납니다.",
        deleted: false,
    },
    {
        chatSessionId: 4,
        question: "집에서 하기 좋은 유산소 운동 추천해줘.",
        answer: "버피 테스트, 슬로우 버피, 제자리 걷기, 그리고 요가 매트를 활용한 마운틴 클라이머를 추천합니다. 층간소음이 걱정된다면 '소음 방지 운동' 영상을 참고해보세요.",
        deleted: false,
    },
    {
        chatSessionId: 5,
        question: "비타민 C가 많은 과일은 뭐가 있어?",
        answer: "비타민 C는 딸기, 키위, 오렌지, 레몬 등에 풍부합니다. 특히 키위 한 개에는 하루 권장 섭취량의 상당 부분이 들어있어 건강에 좋습니다.",
        deleted: false,
    },
    {
        chatSessionId: 6,
        question: "번아웃이 온 것 같은데 어떻게 극복할까?",
        answer: "충분한 휴식이 가장 중요합니다. 일과 삶의 경계를 명확히 하고, 가벼운 산책이나 취미 생활을 통해 뇌를 환기시켜 보세요. 전문가와 상담하는 것도 큰 도움이 됩니다.",
        deleted: false,
    },
    {
        chatSessionId: 7,
        question: "세계에서 가장 높은 산은 어디야?",
        answer: "세계에서 가장 높은 산은 해발 8,848m인 에베레스트(Everest) 산으로, 히말라야 산맥에 위치해 있습니다.",
        deleted: false,
    },
    {
        chatSessionId: 8,
        question: "시간 관리를 잘하는 팁 알려줘.",
        answer: "포모도로 기법(25분 집중, 5분 휴식)을 사용하거나, '할 일 목록(To-do List)'을 작성해 우선순위를 정하는 것이 효과적입니다.",
        deleted: false,
    },
    {
        chatSessionId: 9,
        question: "자기계발서 베스트셀러 하나 추천해줘.",
        answer: "제임스 클리어의 '아주 작은 습관의 힘'을 추천합니다. 작은 변화가 어떻게 큰 결과를 만드는지 과학적 근거와 함께 잘 설명해주는 책입니다.",
        deleted: false,
    },
    {
        chatSessionId: 10,
        question: "인공지능이란 무엇인가요?",
        answer: "인공지능(AI)은 인간의 학습 능력, 추론 능력, 지각 능력 등을 컴퓨터 프로그램으로 구현한 기술을 의미합니다.",
        deleted: false,
    },
];
// PromptManager : 프롬프트 렌더링 + 카테고리 상태 전담 클래스
class PromptManager {
    currentCategory = "all";
    grid;
    constructor(grid) {
        this.grid = grid;
    }
    setCategory(cat) {
        this.currentCategory = cat;
    }
    getCurrentCategory() {
        return this.currentCategory;
    }
    render() {
        const filtered = this.currentCategory === "all"
            ? promptData
            : promptData.filter((item) => item.category === this.currentCategory);
        const html = filtered
            .map((item) => {
            return `
                    <article class='prompt-card' role=listitem>
                        <div class='prompt-card-title'>#${item.title}</div>
                        <div class='prompt-card-description'>${item.description}</div>
                        <button class='add-prompt-btn' data-id='${item.id}'>✔️ 프롬프트 선택</button>
                    </article>
                `;
        })
            .join("");
        this.grid.innerHTML = html || "<p>프롬프트가 없습니다.</p>";
    }
}
// ChatSessionManager : 채팅 세션 렌더링
class ChatSessionManager {
    grid;
    constructor(grid) {
        this.grid = grid;
    }
    render() {
        const filtered = chatSessionData;
        const html = filtered
            .map((item) => {
            return `
                    <article class='chat-session-card' role=listitem>
                        <button class='chat-session-btn' id='chatSessionBtn' data-id='${item.chatSessionId}'>${item.question}</button>
                    </article>
                `;
        })
            .join("");
        this.grid.innerHTML = html || "<p>프롬프트가 없습니다.</p>";
    }
}
// 인스턴스 생성 - 클래스를 new 키워드로 실체화
const API_KEY = "{API_KEY}";
const promptGrid = document.getElementById("promptGrid");
const chatSessionGrid = document.getElementById("chatSessionGrid");
const promptManager = new PromptManager(promptGrid); // 프롬프트 매니저
const chatSessionManager = new ChatSessionManager(chatSessionGrid); // 채팅 세션 매니저
const chatSessionsOpenBtn = document.getElementById("chatSessionsOpenBtn");
const chatSessionsCloseBtn = document.getElementById("chatSessionsCloseBtn");
const chatSessionsSidebar = document.getElementById("chatSessionsSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const chatMessagesGrid = document.getElementById("chatMessagesGrid");
// 채팅
async function ask() {
    //   const prompt = (document.getElementById("questionInput") as HTMLTextAreaElement).value;
    const inputElement = document.getElementById("questionInput");
    const prompt = inputElement.value;
    if (!prompt || prompt.trim() === "") {
        document.getElementById("output").innerText = "질문을 입력해주세요.";
        return;
    }
    // 질문을 변수(prompt)에 저장했으니, 입력창은 바로 비워줍니다.
    inputElement.value = "";
    // [1단계] 화면에 질문과 "..."(생각 중) 상태를 먼저 표시
    const chatGrid = document.getElementById("chatMessagesGrid");
    chatGrid.innerHTML = `
    <article class='message-card active' role=listitem>
        <div class='message-card-user'>${prompt}</div>
        <div class='message-card-bot'>
            <div class="bot-logo">
                👩‍💻 Assistant AI
            </div>
            <div class="bot-answer thinking">...</div>     
        </div>
    </article>`;
    try {
        // [2단계] API 호출 시작
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });
        if (!res.ok)
            throw new Error("API 호출 실패");
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "응답을 가져올 수 없습니다.";
        // [3단계] 너무 빨리 나오지 않게 의도적으로 0.8초 정도 딜레이 추가
        await new Promise(resolve => setTimeout(resolve, 3000));
        // [4단계] "..."이었던 부분을 실제 답변으로 교체
        const botAnswerDiv = chatGrid.querySelector('.bot-answer');
        if (botAnswerDiv) {
            botAnswerDiv.classList.remove('thinking'); // 깜빡임 효과 제거
            botAnswerDiv.innerText = text; // "..."을 실제 답변으로 교체
        }
        console.log(prompt);
        console.log(text);
        // document.getElementById("output")!.innerText = text;
    }
    catch (err) {
        console.error("에러 발생:", err);
        const botAnswerDiv = chatGrid.querySelector('.bot-answer');
        if (botAnswerDiv)
            botAnswerDiv.innerText = "오류가 발생했습니다.";
    }
}
window.ask = ask;
// New Chat 버튼을 눌렀을 때
// 'New Chat' 버튼 요소를 가져옵니다.
const newChatBtn = document.getElementById("newChatBtn");
newChatBtn?.addEventListener("click", () => {
    // 1. 채팅 내역이 담긴 그리드 내부를 비웁니다.
    const chatGrid = document.getElementById("chatMessagesGrid");
    chatGrid.innerHTML = "";
});
// function chat session open / close
function openChatSession() {
    chatSessionsSidebar.classList.add("open");
    sidebarOverlay.classList.add("active");
    chatSessionsSidebar.setAttribute("aria-hidden", "false");
    // 채팅 세션 렌더링
    chatSessionManager.render();
}
function closeChatSession() {
    chatSessionsSidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
    chatSessionsSidebar.setAttribute("aria-hidden", "true");
}
// 이벤트 처리
// 필터 탭 클릭 이벤트
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        filterBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        // promptManager.setCategory() : 필터 선택한 요소들만 나와야함
        promptManager.setCategory(this.dataset.category || "all");
        // promptManager.render() : 변경된 카테고리로 렌더링 (프롬프트 다시 그리기)
        promptManager.render();
    });
});
// 채팅 세션 사이드바 열기/닫기
chatSessionsOpenBtn.addEventListener("click", openChatSession);
chatSessionsCloseBtn.addEventListener("click", closeChatSession);
sidebarOverlay.addEventListener("click", closeChatSession);
// 선택한 채팅의 상세 내용 가져오기
chatSessionGrid.addEventListener("click", function (e) {
    // closest : 클릭된 요소에서 가장 가까운 해당 선택자 조상을 찾음
    const btn = e.target.closest(".chat-session-btn");
    if (!btn || btn.disabled)
        return;
    // dataset.id = data-id 속성 값
    const id = Number(btn.dataset.id);
    console.log(id);
    let filteredData = chatSessionData.find((c) => c.chatSessionId === id) || {
        chatSessionId: 0,
        question: "",
        answer: "",
        deleted: false,
    };
    // if (filteredData.length() > 0) {
    chatMessagesGrid.innerHTML = `
                    <article class='message-card active' role=listitem>
                    <div class='message-card-user'>${filteredData.question}</div>
                    <div class='message-card-bot'>
                        <div class="bot-logo">
                            👩‍💻 Assistant AI
                        </div>
                        <div class="bot-answer">
                            ${filteredData.answer}
                        </div>     
                    </div>
                </article>`;
    // }
});
// 초기 렌더링
promptManager.render();
console.log("웹 초기화 완료!");
console.log(`프롬프트 총 ${promptData.length}개 로드됨`);
export {};
