/** コース別アンカー（#course-*） */
const courseAnchor = {
  zeroOne: "course-0-1",
  skill: "course-skill",
  inquiry: "course-inquiry",
} as const;

type CourseThemeClass = {
  border: string;
  headerBg: string;
  headerText: string;
  dtStrong: string;
  badge: string;
  divideClass: string;
  bulletColor: string;
};

export const courseTheme: Record<
  "zeroOne" | "skill" | "inquiry",
  CourseThemeClass
> = {
  zeroOne: {
    border: "border-l-4 border-accent",
    headerBg: "bg-accent",
    headerText: "text-white",
    dtStrong: "text-accent",
    badge: "bg-accent/15 text-accent",
    divideClass: "divide-accent/30",
    bulletColor: "bg-accent",
  },
  skill: {
    border: "border-l-4 border-teal-600",
    headerBg: "bg-teal-700",
    headerText: "text-white",
    dtStrong: "text-teal-700",
    badge: "bg-teal-600/12 text-teal-800 dark:text-teal-100",
    divideClass: "divide-teal-700/30",
    bulletColor: "bg-teal-600",
  },
  inquiry: {
    border: "border-l-4 border-indigo-600",
    headerBg: "bg-indigo-600",
    headerText: "text-white",
    dtStrong: "text-indigo-700",
    badge: "bg-indigo-600/12 text-indigo-900 dark:text-indigo-100",
    divideClass: "divide-indigo-600/30",
    bulletColor: "bg-indigo-600",
  },
};

export type CourseDefinition = {
  key: keyof typeof courseAnchor;
  id: string;
  navLabel: string;
  name: string;
  ageRange: string;
  tagline: string;
  valueTheme: string;
  childChanges: string[];
  homeHighlights: string[];
  monthlySessions: string;
  monthlyPrice: string;
  themeNote: string;
  /** 準備中（Coming Soon）として案内するコース */
  comingSoon?: boolean;
  targetProfiles: string[];
  philosophy: {
    purpose: string;
    style: string;
    norms: string[];
    parents: string[];
  };
  parentNote?: string;
};

export const courses: CourseDefinition[] = [
  {
    key: "zeroOne",
    id: courseAnchor.zeroOne,
    navLabel: "0→1（詳細）",
    name: "0→1コース",
    ageRange: "小学校1年生〜中学生",
    tagline: "「正解」を探す前に「好き」を見つけよう！",
    valueTheme: "才能の種まきと「好き」の発見",
    childChanges: [
      "「やってみたい！」という知的好奇心のエンジンがかかる",
      "自分に【合う・合わない】を判断できる自分軸ができる",
      "未知のジャンルに飛び込むフットワークの軽さが身につく",
    ],
    homeHighlights: [
      "月2回×各2時間・税込11,000円（テーマ月替わり）",
      "1回目は体験と全体像／2回目は工夫とアウトプット",
      "ファシリテーション中心で「場を盛り上げる」",
    ],
    monthlySessions: "2時間×2回／月",
    monthlyPrice: "11,000円（税込）",
    themeNote: "回ごとに異なるテーマを扱います",
    targetProfiles: [
      "学校が合わない／不登校気味 → 0→1コース",
      "体験が少ない／好奇心は強い → 0→1コース or 探究コース",
    ],
    philosophy: {
      purpose: "未知分野への挑戦にポジティブな感覚を醸成する",
      style:
        "ファシリテーション中心。「教える」よりも「場を盛り上げる」ことに重きを置きます。講師はお手本であると同時に、その楽しさを最大限に表現し、子どもの好奇心をかき立てます。初めての体験をポジティブかつ楽しいものとして残すことを大切にします。",
      norms: [
        "「とりあえずやってみる」が最高法規",
        "感性の言語化：最初にイメージを書かせ、最後には「〇〇だから好き」と具体を引き出す",
      ],
      parents: [
        "子どもが何を感じたのかの記録と写真を共有します",
        "特定のスキル習得が目的ではなく、好奇心の種を蒔き、挑戦へのハードルを下げることが目的であることをお伝えします",
      ],
    },
    parentNote:
      "土日の親子体験型イベントの企画も検討しています（詳細は決まり次第お知らせします）。",
  },
  {
    key: "skill",
    id: courseAnchor.skill,
    navLabel: "スキル（詳細）",
    name: "スキルコース",
    ageRange: "小学校4年生〜高校生",
    tagline: "「やりたい」を「できる」に！",
    valueTheme: "一生モノの「武器」と「自信」",
    childChanges: [
      "【できない】を【できる】に変える習得のコツを掴む",
      "エラーが出ても自分で調べて解決する自走力",
      "道具を【遊びの道具】から【目的達成の手段】へと変化させる",
    ],
    homeHighlights: [
      "月4回×各2時間・税込19,800円（テーマ月替わり）",
      "インプット〜クエスト〜プロダクト〜発表・レビューの4回型",
      "レビューで技術レベルを評価・認定（探究プロジェクトに活用）",
    ],
    monthlySessions: "2時間×4回／月",
    monthlyPrice: "19,800円（税込）",
    themeNote: "月ごとに異なるテーマを扱います",
    comingSoon: true,
    targetProfiles: [
      "勉強はできるが目的がない／自信がない → 探究コース or スキルコース",
      "保護者の不安・期待（学力、非認知、進路、居場所、将来の武器） → スキルコース or 探究コース",
    ],
    philosophy: {
      purpose: "「できる」を増やすことで「やりたい」の幅を広げ、解像度を高める",
      style:
        "技術的な正解を安易に教えません。環境の提供と安全管理を最優先し、調べ方や試行錯誤を促します。講師は技術面の指導に加え、コーチングと問い返しを中心に行います。",
      norms: [
        "子ども扱いしない。プロが使うツールや用語をそのまま使う",
        "「失敗＝改善チャンス」と捉え、やり直しを肯定する",
        "技術の共有：自分の見つけた「コツ」や「裏技」を言葉にして仲間と共有し助け合う",
      ],
      parents: [
        "新しいスキル習得を繰り返すことで、スキル習得の「型」自体を学んでいること、習得には個人差があることをお伝えします",
        "習得したスキル一覧と作品を提示します",
      ],
    },
  },
  {
    key: "inquiry",
    id: courseAnchor.inquiry,
    navLabel: "探究（詳細）",
    name: "探究コース",
    ageRange: "中学生〜高校生",
    tagline: "君の「これだ！」で世界を変革せよ！",
    valueTheme:
      "社会とつながる「実績」、社会で生きる「コミュニケーション能力」",
    childChanges: [
      "社会や日常の課題に対して、自分なりの【問い】を立てる力",
      "チームの中で自分の役割を見つけ、協働する力",
      "想定外のトラブルを受け入れ、修正しながら達成するレジリエンス",
    ],
    homeHighlights: [
      "月8回×各1.5時間・税込29,800円（期間指定なし）",
      "問い立て〜調査・構造化〜試行錯誤〜レビュー＆発表の流れ",
      "大学生・社会人からのレビューを取り入れ改善",
    ],
    monthlySessions: "1.5時間×8回／月",
    monthlyPrice: "29,800円（税込）",
    themeNote: "期間指定なし（プロジェクトに応じて伴走）",
    targetProfiles: [
      "勉強はできるが目的がない／自信がない → 探究コース or スキルコース",
      "体験が少ない／好奇心は強い → 0→1コース or 探究コース",
      "進学目的が強く、探求を手段化したい → 探究コース",
    ],
    philosophy: {
      purpose:
        "探究を通して、物事に向き合う力（レジリエンス）、物事を進める力（コミュニケーション、計画、交渉）を養う",
      style:
        "講師はプロジェクトを進めるパートナーとして接します。生徒の視点を広げられるよう問いを投げかけることに重きを置き、試行錯誤を促します。",
      norms: [
        "納得いくまで、とことんやろう",
        "「なぜ？」に自分の言葉で説明し続けよう",
        "社会に繰り出し、フィードバックを得よう",
      ],
      parents: [
        "発表会までの【探究の軌跡】を共有します",
        "発表会へのご招待",
      ],
    },
  },
];

/** お子さま・ご家庭のタイプ別の選び方（案内用） */
export type CourseRoutingHint = {
  id: string;
  profile: string;
  recommendations: Array<{
    key: CourseDefinition["key"];
    label: string;
  }>;
};

export const courseRoutingHints: CourseRoutingHint[] = [
  {
    id: "purpose-confidence",
    profile: "勉強はできるが目的がない・自信がない",
    recommendations: [
      { key: "zeroOne", label: "0→1コース" },
      { key: "skill", label: "スキルコース" },
    ],
  },
  {
    id: "school-fit",
    profile: "学校が合わない・不登校気味",
    recommendations: [
      { key: "zeroOne", label: "0→1コース" },
      { key: "inquiry", label: "探究コース" },
    ],
  },
  {
    id: "curiosity",
    profile: "体験が少ない・好奇心は強い",
    recommendations: [
      { key: "zeroOne", label: "0→1コース" },
      { key: "inquiry", label: "探究コース" },
    ],
  },
  {
    id: "admission-focus",
    profile: "進学目的が強く、探求を手段化したい",
    recommendations: [{ key: "inquiry", label: "探究コース" }],
  },
];

/** 探究コース：指導方針（参考：チーム運営のベストプラクティス） */
export const inquiryGuidingPrinciples = [
  "答えを教えるのではなく、自分で答えに辿り着けるよう、適切な問いを投げかける",
  "チームを信頼し、マイクロマネジメントをしない",
  "排他的な発言をしない",
  "成果を出させ、成長しているという実感を与える",
  "相手の話をよく聞き、適切な情報を共有する",
  "長所と短所を継続的にフィードバックし、共に成長する",
  "明確なビジョンと戦略を示す（ラボとしての方向性を示す）",
  "スキルと専門性を身につけ、相手の課題を深く理解する",
  "全体最適を目指す",
  "決断を促す",
];
