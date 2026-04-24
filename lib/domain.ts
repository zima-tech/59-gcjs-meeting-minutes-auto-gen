import type { AnalysisView, ConsoleRoute, DashboardSnapshot, RouteMetric, WorkspaceView, WorkItemInput } from "@/lib/types";

export const appMeta = {
  "seq": "59",
  "title": "会议纪要、研讨会自动生成文档工具",
  "department": "工程建设部",
  "shortName": "会议纪要生成台",
  "description": "对工程会议语音转写、议题提取、纪要结构化、人工编辑和项目台账同步形成闭环。",
  "modules": [
    "会议管理",
    "语音转写",
    "议题提取",
    "纪要编辑",
    "责任分工",
    "台账同步"
  ],
  "statuses": [
    "待转写",
    "生成中",
    "待确认",
    "已同步"
  ],
  "aiTitle": "纪要生成助手",
  "aiPrompt": "请从会议转写中提炼议题、决议事项、责任单位和完成时限。",
  "integrations": [
    "会议转写批次",
    "项目管理台账",
    "会议日程清单",
    "纪要生成规则库"
  ],
  "sourceObjectName": "工程会议",
  "dataSourceTitle": "会议台账批次",
  "aiExperience": {
    "panelTag": "转写摘要 / 决议提取 / 台账同步",
    "objectLabel": "当前工程会议",
    "emptyTitle": "请选择工程会议后生成纪要方案",
    "emptyDescription": "系统会结合会议转写、议题提取和责任分工状态，输出纪要摘要、决议事项、责任单位和完成时限。",
    "resultType": "会议纪要方案",
    "savedStatusLabel": "已采纳",
    "saveActionLabel": "采纳纪要草稿",
    "saveEventAction": "采纳纪要草稿",
    "generateEventAction": "生成会议纪要",
    "savedSuccessText": "纪要摘要、责任分工和时限要求已同步到当前工程会议。",
    "stepTitles": [
      "读取会议转写与议题清单",
      "提取决议事项和责任单位",
      "生成纪要摘要与完成时限",
      "等待采纳并同步项目台账"
    ],
    "focusAreas": [
      "转写摘要",
      "议题提取",
      "决议事项",
      "责任分工",
      "完成时限",
      "台账同步"
    ],
    "quickPrompts": [
      "请提炼本次会议的核心议题、决议事项和责任单位。",
      "请生成纪要正文，并标注完成时限和需人工复核的内容。",
      "请给出台账同步清单，说明后续跟踪事项和风险提示。"
    ],
    "resultFields": [
      { "label": "会议模块", "source": "category" },
      { "label": "责任单位", "source": "owner" },
      { "label": "当前阶段", "source": "status" },
      { "label": "纪要摘要", "source": "summary" }
    ]
  },
  "prd": "59_工程建设部_会议纪要、研讨会自动生成文档工具_PRD.md",
  "demand": "59_工程建设部_会议纪要、研讨会自动生成文档工具_需求文档.md"
} as const;

export const seedRecords = [
  {
    "code": "MT-2026-001",
    "title": "会议管理-机场路快速化改造周例会-001",
    "category": "会议管理",
    "status": "待转写",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "业务受理岗",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于会议管理模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议转写批次",
    "sourceType": "工程会议",
    "sourceTitle": "会议管理-机场路快速化改造周例会-001",
    "sourceBatch": "会议转写批次·2026年第1批",
    "dueDateOffsetDays": 2
  },
  {
    "code": "MT-2026-002",
    "title": "语音转写-桥梁专项施工方案研讨会-002",
    "category": "语音转写",
    "status": "生成中",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "风险研判岗",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于语音转写模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "项目管理台账",
    "sourceType": "工程会议",
    "sourceTitle": "语音转写-桥梁专项施工方案研讨会-002",
    "sourceBatch": "项目管理台账·2026年第2批",
    "dueDateOffsetDays": 3
  },
  {
    "code": "MT-2026-003",
    "title": "议题提取-一季度质量安全复盘会-003",
    "category": "议题提取",
    "status": "待确认",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "台账复核岗",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于议题提取模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议日程清单",
    "sourceType": "工程会议",
    "sourceTitle": "议题提取-一季度质量安全复盘会-003",
    "sourceBatch": "会议日程清单·2026年第3批",
    "dueDateOffsetDays": 4
  },
  {
    "code": "MT-2026-004",
    "title": "纪要编辑-机场路快速化改造周例会-004",
    "category": "纪要编辑",
    "status": "已同步",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "部门负责人",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于纪要编辑模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "纪要生成规则库",
    "sourceType": "工程会议",
    "sourceTitle": "纪要编辑-机场路快速化改造周例会-004",
    "sourceBatch": "纪要生成规则库·2026年第4批",
    "dueDateOffsetDays": 5
  },
  {
    "code": "MT-2026-005",
    "title": "责任分工-桥梁专项施工方案研讨会-005",
    "category": "责任分工",
    "status": "待转写",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "专项工作组",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于责任分工模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议转写批次",
    "sourceType": "工程会议",
    "sourceTitle": "责任分工-桥梁专项施工方案研讨会-005",
    "sourceBatch": "会议转写批次·2026年第1批",
    "dueDateOffsetDays": 6
  },
  {
    "code": "MT-2026-006",
    "title": "台账同步-一季度质量安全复盘会-006",
    "category": "台账同步",
    "status": "生成中",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "数据分析岗",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于台账同步模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "项目管理台账",
    "sourceType": "工程会议",
    "sourceTitle": "台账同步-一季度质量安全复盘会-006",
    "sourceBatch": "项目管理台账·2026年第2批",
    "dueDateOffsetDays": 7
  },
  {
    "code": "MT-2026-007",
    "title": "会议管理-机场路快速化改造周例会-007",
    "category": "会议管理",
    "status": "待确认",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "归档管理岗",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于会议管理模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议日程清单",
    "sourceType": "工程会议",
    "sourceTitle": "会议管理-机场路快速化改造周例会-007",
    "sourceBatch": "会议日程清单·2026年第3批",
    "dueDateOffsetDays": 8
  },
  {
    "code": "MT-2026-008",
    "title": "语音转写-桥梁专项施工方案研讨会-008",
    "category": "语音转写",
    "status": "已同步",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "运营协调岗",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于语音转写模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "纪要生成规则库",
    "sourceType": "工程会议",
    "sourceTitle": "语音转写-桥梁专项施工方案研讨会-008",
    "sourceBatch": "纪要生成规则库·2026年第4批",
    "dueDateOffsetDays": 9
  },
  {
    "code": "MT-2026-009",
    "title": "议题提取-一季度质量安全复盘会-009",
    "category": "议题提取",
    "status": "待转写",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "业务受理岗",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于议题提取模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议转写批次",
    "sourceType": "工程会议",
    "sourceTitle": "议题提取-一季度质量安全复盘会-009",
    "sourceBatch": "会议转写批次·2026年第1批",
    "dueDateOffsetDays": 10
  },
  {
    "code": "MT-2026-010",
    "title": "纪要编辑-机场路快速化改造周例会-010",
    "category": "纪要编辑",
    "status": "生成中",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "风险研判岗",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于纪要编辑模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "项目管理台账",
    "sourceType": "工程会议",
    "sourceTitle": "纪要编辑-机场路快速化改造周例会-010",
    "sourceBatch": "项目管理台账·2026年第2批",
    "dueDateOffsetDays": 11
  },
  {
    "code": "MT-2026-011",
    "title": "责任分工-桥梁专项施工方案研讨会-011",
    "category": "责任分工",
    "status": "待确认",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "台账复核岗",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于责任分工模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议日程清单",
    "sourceType": "工程会议",
    "sourceTitle": "责任分工-桥梁专项施工方案研讨会-011",
    "sourceBatch": "会议日程清单·2026年第3批",
    "dueDateOffsetDays": 12
  },
  {
    "code": "MT-2026-012",
    "title": "台账同步-一季度质量安全复盘会-012",
    "category": "台账同步",
    "status": "已同步",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "部门负责人",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于台账同步模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "纪要生成规则库",
    "sourceType": "工程会议",
    "sourceTitle": "台账同步-一季度质量安全复盘会-012",
    "sourceBatch": "纪要生成规则库·2026年第4批",
    "dueDateOffsetDays": 13
  },
  {
    "code": "MT-2026-013",
    "title": "会议管理-机场路快速化改造周例会-013",
    "category": "会议管理",
    "status": "待转写",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "专项工作组",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于会议管理模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议转写批次",
    "sourceType": "工程会议",
    "sourceTitle": "会议管理-机场路快速化改造周例会-013",
    "sourceBatch": "会议转写批次·2026年第1批",
    "dueDateOffsetDays": 14
  },
  {
    "code": "MT-2026-014",
    "title": "语音转写-桥梁专项施工方案研讨会-014",
    "category": "语音转写",
    "status": "生成中",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "数据分析岗",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于语音转写模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "项目管理台账",
    "sourceType": "工程会议",
    "sourceTitle": "语音转写-桥梁专项施工方案研讨会-014",
    "sourceBatch": "项目管理台账·2026年第2批",
    "dueDateOffsetDays": 15
  },
  {
    "code": "MT-2026-015",
    "title": "议题提取-一季度质量安全复盘会-015",
    "category": "议题提取",
    "status": "待确认",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "归档管理岗",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于议题提取模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议日程清单",
    "sourceType": "工程会议",
    "sourceTitle": "议题提取-一季度质量安全复盘会-015",
    "sourceBatch": "会议日程清单·2026年第3批",
    "dueDateOffsetDays": 16
  },
  {
    "code": "MT-2026-016",
    "title": "纪要编辑-机场路快速化改造周例会-016",
    "category": "纪要编辑",
    "status": "已同步",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "运营协调岗",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于纪要编辑模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "纪要生成规则库",
    "sourceType": "工程会议",
    "sourceTitle": "纪要编辑-机场路快速化改造周例会-016",
    "sourceBatch": "纪要生成规则库·2026年第4批",
    "dueDateOffsetDays": 17
  },
  {
    "code": "MT-2026-017",
    "title": "责任分工-桥梁专项施工方案研讨会-017",
    "category": "责任分工",
    "status": "待转写",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "业务受理岗",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于责任分工模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议转写批次",
    "sourceType": "工程会议",
    "sourceTitle": "责任分工-桥梁专项施工方案研讨会-017",
    "sourceBatch": "会议转写批次·2026年第1批",
    "dueDateOffsetDays": 18
  },
  {
    "code": "MT-2026-018",
    "title": "台账同步-一季度质量安全复盘会-018",
    "category": "台账同步",
    "status": "生成中",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "风险研判岗",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于台账同步模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "项目管理台账",
    "sourceType": "工程会议",
    "sourceTitle": "台账同步-一季度质量安全复盘会-018",
    "sourceBatch": "项目管理台账·2026年第2批",
    "dueDateOffsetDays": 19
  },
  {
    "code": "MT-2026-019",
    "title": "会议管理-机场路快速化改造周例会-019",
    "category": "会议管理",
    "status": "待确认",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "台账复核岗",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于会议管理模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议日程清单",
    "sourceType": "工程会议",
    "sourceTitle": "会议管理-机场路快速化改造周例会-019",
    "sourceBatch": "会议日程清单·2026年第3批",
    "dueDateOffsetDays": 2
  },
  {
    "code": "MT-2026-020",
    "title": "语音转写-桥梁专项施工方案研讨会-020",
    "category": "语音转写",
    "status": "已同步",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "部门负责人",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于语音转写模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "纪要生成规则库",
    "sourceType": "工程会议",
    "sourceTitle": "语音转写-桥梁专项施工方案研讨会-020",
    "sourceBatch": "纪要生成规则库·2026年第4批",
    "dueDateOffsetDays": 3
  },
  {
    "code": "MT-2026-021",
    "title": "议题提取-一季度质量安全复盘会-021",
    "category": "议题提取",
    "status": "待转写",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "专项工作组",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于议题提取模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议转写批次",
    "sourceType": "工程会议",
    "sourceTitle": "议题提取-一季度质量安全复盘会-021",
    "sourceBatch": "会议转写批次·2026年第1批",
    "dueDateOffsetDays": 4
  },
  {
    "code": "MT-2026-022",
    "title": "纪要编辑-机场路快速化改造周例会-022",
    "category": "纪要编辑",
    "status": "生成中",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "数据分析岗",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于纪要编辑模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "项目管理台账",
    "sourceType": "工程会议",
    "sourceTitle": "纪要编辑-机场路快速化改造周例会-022",
    "sourceBatch": "项目管理台账·2026年第2批",
    "dueDateOffsetDays": 5
  },
  {
    "code": "MT-2026-023",
    "title": "责任分工-桥梁专项施工方案研讨会-023",
    "category": "责任分工",
    "status": "待确认",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "归档管理岗",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于责任分工模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议日程清单",
    "sourceType": "工程会议",
    "sourceTitle": "责任分工-桥梁专项施工方案研讨会-023",
    "sourceBatch": "会议日程清单·2026年第3批",
    "dueDateOffsetDays": 6
  },
  {
    "code": "MT-2026-024",
    "title": "台账同步-一季度质量安全复盘会-024",
    "category": "台账同步",
    "status": "已同步",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "运营协调岗",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于台账同步模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "纪要生成规则库",
    "sourceType": "工程会议",
    "sourceTitle": "台账同步-一季度质量安全复盘会-024",
    "sourceBatch": "纪要生成规则库·2026年第4批",
    "dueDateOffsetDays": 7
  },
  {
    "code": "MT-2026-025",
    "title": "会议管理-机场路快速化改造周例会-025",
    "category": "会议管理",
    "status": "待转写",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "业务受理岗",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于会议管理模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议转写批次",
    "sourceType": "工程会议",
    "sourceTitle": "会议管理-机场路快速化改造周例会-025",
    "sourceBatch": "会议转写批次·2026年第1批",
    "dueDateOffsetDays": 8
  },
  {
    "code": "MT-2026-026",
    "title": "语音转写-桥梁专项施工方案研讨会-026",
    "category": "语音转写",
    "status": "生成中",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "风险研判岗",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于语音转写模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "项目管理台账",
    "sourceType": "工程会议",
    "sourceTitle": "语音转写-桥梁专项施工方案研讨会-026",
    "sourceBatch": "项目管理台账·2026年第2批",
    "dueDateOffsetDays": 9
  },
  {
    "code": "MT-2026-027",
    "title": "议题提取-一季度质量安全复盘会-027",
    "category": "议题提取",
    "status": "待确认",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "台账复核岗",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于议题提取模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议日程清单",
    "sourceType": "工程会议",
    "sourceTitle": "议题提取-一季度质量安全复盘会-027",
    "sourceBatch": "会议日程清单·2026年第3批",
    "dueDateOffsetDays": 10
  },
  {
    "code": "MT-2026-028",
    "title": "纪要编辑-机场路快速化改造周例会-028",
    "category": "纪要编辑",
    "status": "已同步",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "部门负责人",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于纪要编辑模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "纪要生成规则库",
    "sourceType": "工程会议",
    "sourceTitle": "纪要编辑-机场路快速化改造周例会-028",
    "sourceBatch": "纪要生成规则库·2026年第4批",
    "dueDateOffsetDays": 11
  },
  {
    "code": "MT-2026-029",
    "title": "责任分工-桥梁专项施工方案研讨会-029",
    "category": "责任分工",
    "status": "待转写",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "专项工作组",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于责任分工模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议转写批次",
    "sourceType": "工程会议",
    "sourceTitle": "责任分工-桥梁专项施工方案研讨会-029",
    "sourceBatch": "会议转写批次·2026年第1批",
    "dueDateOffsetDays": 12
  },
  {
    "code": "MT-2026-030",
    "title": "台账同步-一季度质量安全复盘会-030",
    "category": "台账同步",
    "status": "生成中",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "数据分析岗",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于台账同步模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "项目管理台账",
    "sourceType": "工程会议",
    "sourceTitle": "台账同步-一季度质量安全复盘会-030",
    "sourceBatch": "项目管理台账·2026年第2批",
    "dueDateOffsetDays": 13
  },
  {
    "code": "MT-2026-031",
    "title": "会议管理-机场路快速化改造周例会-031",
    "category": "会议管理",
    "status": "待确认",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "归档管理岗",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于会议管理模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议日程清单",
    "sourceType": "工程会议",
    "sourceTitle": "会议管理-机场路快速化改造周例会-031",
    "sourceBatch": "会议日程清单·2026年第3批",
    "dueDateOffsetDays": 14
  },
  {
    "code": "MT-2026-032",
    "title": "语音转写-桥梁专项施工方案研讨会-032",
    "category": "语音转写",
    "status": "已同步",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "运营协调岗",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于语音转写模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "纪要生成规则库",
    "sourceType": "工程会议",
    "sourceTitle": "语音转写-桥梁专项施工方案研讨会-032",
    "sourceBatch": "纪要生成规则库·2026年第4批",
    "dueDateOffsetDays": 15
  },
  {
    "code": "MT-2026-033",
    "title": "议题提取-一季度质量安全复盘会-033",
    "category": "议题提取",
    "status": "待转写",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "业务受理岗",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于议题提取模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议转写批次",
    "sourceType": "工程会议",
    "sourceTitle": "议题提取-一季度质量安全复盘会-033",
    "sourceBatch": "会议转写批次·2026年第1批",
    "dueDateOffsetDays": 16
  },
  {
    "code": "MT-2026-034",
    "title": "纪要编辑-机场路快速化改造周例会-034",
    "category": "纪要编辑",
    "status": "生成中",
    "priority": "P2",
    "riskLevel": "中",
    "owner": "风险研判岗",
    "description": "已完成 78 分钟转写，待确认征迁协调和管线迁改责任分工。 本记录用于纪要编辑模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "项目管理台账",
    "sourceType": "工程会议",
    "sourceTitle": "纪要编辑-机场路快速化改造周例会-034",
    "sourceBatch": "项目管理台账·2026年第2批",
    "dueDateOffsetDays": 17
  },
  {
    "code": "MT-2026-035",
    "title": "责任分工-桥梁专项施工方案研讨会-035",
    "category": "责任分工",
    "status": "待确认",
    "priority": "P1",
    "riskLevel": "高",
    "owner": "台账复核岗",
    "description": "正在生成专家意见摘要和风险控制措施。 本记录用于责任分工模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "会议日程清单",
    "sourceType": "工程会议",
    "sourceTitle": "责任分工-桥梁专项施工方案研讨会-035",
    "sourceBatch": "会议日程清单·2026年第3批",
    "dueDateOffsetDays": 18
  },
  {
    "code": "MT-2026-036",
    "title": "台账同步-一季度质量安全复盘会-036",
    "category": "台账同步",
    "status": "已同步",
    "priority": "P3",
    "riskLevel": "低",
    "owner": "部门负责人",
    "description": "纪要已同步至问题整改台账，生成 6 项跟踪任务。 本记录用于台账同步模块演示，已补充来源批次、责任岗位、办理期限和处理留痕。",
    "source": "纪要生成规则库",
    "sourceType": "工程会议",
    "sourceTitle": "台账同步-一季度质量安全复盘会-036",
    "sourceBatch": "纪要生成规则库·2026年第4批",
    "dueDateOffsetDays": 19
  }
] as const;

export const seedInsights = [
  {
    "title": "会议转写平均完成时间 2.8 分钟",
    "value": "86%",
    "trend": "up",
    "level": "success"
  },
  {
    "title": "待确认纪要中责任时限缺失占比 14%",
    "value": "24",
    "trend": "steady",
    "level": "warning"
  },
  {
    "title": "本月已同步项目台账 23 条",
    "value": "4.6h",
    "trend": "down",
    "level": "processing"
  }
] as const;

export const consoleRoutes: ConsoleRoute[] = [
  { key: "dashboard", slug: "dashboard", path: "/dashboard", title: "会议工具首页", description: "查看转写、纪要和同步状态总览。", kind: "dashboard" },
  { key: "meetings", slug: "meetings", path: "/meetings", title: "会议记录", description: "沉淀会议基础信息和实时转写任务。", kind: "workspace" },
  { key: "minutes", slug: "minutes", path: "/minutes", title: "纪要生成", description: "围绕议题提取、责任分工和纪要编辑推进。", kind: "workspace" },
  { key: "sync", slug: "sync", path: "/sync", title: "台账同步", description: "查看纪要输出、责任事项和项目台账联动情况。", kind: "analysis" },
  {
    key: "user-management",
    slug: "users",
    path: "/users",
    title: "用户管理",
    description: "维护后台用户、部门角色和账号状态。",
    kind: "users",
  },
  {
    key: "audit-logs",
    slug: "audit-logs",
    path: "/audit-logs",
    title: "日志审计",
    description: "查看业务操作、设置变更和智能分析留痕。",
    kind: "auditLogs",
  },
  {
    key: "system-settings",
    slug: "settings",
    path: "/settings",
    title: "系统设置",
    description: "维护流程阈值、通知偏好和智能分析开关。",
    kind: "settings",
  },
  { key: "assistant", slug: "assistant", path: "/assistant", title: appMeta.aiTitle, description: "根据会议转写生成纪要摘要和责任分工建议。", kind: "assistant" },
] as const;

const workspaceFieldMap = {
  meetings: [
    { key: "meetingName", label: "会议名称", placeholder: "例如：XX工程进度协调会", required: true },
    { key: "attendees", label: "参会人员", placeholder: "例如：张三、李四、王五", required: true },
    { key: "project", label: "关联项目", placeholder: "例如：机场路快速化改造", required: true },
    { key: "urgency", label: "转写优先级", type: "select", options: ["高", "中", "低"], required: true },
    { key: "description", label: "会议背景", type: "textarea", placeholder: "补充议题、时间要求和会议目标", required: true },
  ],
  minutes: [
    { key: "title", label: "纪要主题", placeholder: "例如：桥梁专项施工方案研讨会", required: true },
    { key: "owner", label: "责任单位", placeholder: "例如：工程技术组", required: true },
    { key: "riskLevel", label: "紧迫程度", type: "select", options: ["高", "中", "低"], required: true },
    { key: "description", label: "纪要要点", type: "textarea", placeholder: "填写决议事项、责任人和完成时限", required: true },
  ],
} as const;

function routeMetrics(snapshot: DashboardSnapshot, rows = snapshot.items): RouteMetric[] {
  const finalStatus = appMeta.statuses.at(-1);
  return [
    { label: "当前会议", value: rows.length, helper: "当前页展示的会议/纪要记录" },
    { label: "待确认", value: rows.filter((item) => item.status !== finalStatus).length, helper: "仍需人工确认或同步的纪要", tone: "warning" },
    { label: "高优先级", value: rows.filter((item) => item.riskLevel === "高").length, helper: "涉及紧急项目节点的会议", tone: "danger" },
    { label: "已同步", value: rows.filter((item) => item.status === finalStatus).length, helper: "已进入项目台账的纪要", tone: "success" },
  ];
}

function sortedRows(rows: DashboardSnapshot["items"]) {
  return rows.slice().sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
}

function byCategories(snapshot: DashboardSnapshot, categories: string[]) {
  return sortedRows(snapshot.items.filter((item) => categories.includes(item.category)));
}

export function getRouteBySlug(slug?: string) {
  return consoleRoutes.find((route) => route.slug === (slug?.trim() || "dashboard"));
}

export function getRouteByKey(key: string) {
  return consoleRoutes.find((route) => route.key === key);
}

export function buildWorkItemInput(routeKey: string, values: Record<string, string>): WorkItemInput {
  if (routeKey === "meetings") {
    const meetingName = values.meetingName?.trim() || "待命名会议";
    return {
      title: `${meetingName}-${values.project?.trim() || "未关联项目"}`,
      category: "会议管理",
      owner: "项目秘书",
      riskLevel: values.urgency || "中",
      description: `参会人员：${values.attendees?.trim() || "待补充"}。${values.description?.trim() || "已登记会议，待转写和议题提取。"}`,
    };
  }

  return {
    title: values.title?.trim() || "待完善纪要草稿",
    category: "纪要编辑",
    owner: values.owner?.trim() || "工程技术组",
    riskLevel: values.riskLevel || "中",
    description: values.description?.trim() || "待补充纪要要点。",
  };
}

export function getWorkspaceView(routeKey: string, snapshot: DashboardSnapshot): WorkspaceView {
  if (routeKey === "meetings") {
    const rows = byCategories(snapshot, ["会议管理", "语音转写"]).slice(0, 10);
    return {
      title: "会议记录",
      description: "围绕会议登记、语音转写和会议基础信息补录展开。",
      metrics: routeMetrics(snapshot, rows),
      formTitle: "登记会议",
      submitLabel: "登记会议并进入转写",
      fields: [...workspaceFieldMap.meetings],
      columns: [
        { key: "code", label: "会议编号", width: 140 },
        { key: "title", label: "会议名称", width: 280, kind: "summary" },
        { key: "category", label: "会议模块", width: 120, kind: "tag" },
        { key: "status", label: "当前阶段", width: 120, kind: "badge" },
        { key: "owner", label: "责任岗位", width: 140 },
        { key: "sourceBatch", label: "转写批次", width: 180 },
      ],
      rows,
      emptyDescription: "暂无会议记录，可先登记首条工程会议。",
      actions: [{ key: "advance", label: "进入纪要生成", disabledWhenFinal: true }],
    };
  }

  const rows = byCategories(snapshot, ["议题提取", "纪要编辑", "责任分工", "台账同步"]).slice(0, 12);
  return {
    title: "纪要生成",
    description: "围绕议题提取、纪要编辑和责任分工持续完善纪要内容。",
    metrics: routeMetrics(snapshot, rows),
    formTitle: "补录纪要草稿",
    submitLabel: "新增纪要任务",
    fields: [...workspaceFieldMap.minutes],
    columns: [
      { key: "code", label: "纪要编号", width: 140 },
      { key: "title", label: "纪要主题", width: 280, kind: "summary" },
      { key: "category", label: "纪要模块", width: 120, kind: "tag" },
      { key: "status", label: "当前阶段", width: 120, kind: "badge" },
      { key: "riskLevel", label: "紧迫程度", width: 100, kind: "tag" },
      { key: "owner", label: "责任单位", width: 140 },
      { key: "sourceBatch", label: "会议批次", width: 180 },
    ],
    rows,
    emptyDescription: "暂无纪要任务，请先在会议记录页登记会议。",
    actions: [
      { key: "advance", label: "推进纪要", disabledWhenFinal: true },
      { key: "delete", label: "删除", danger: true, confirmTitle: "确认删除该纪要任务？", confirmText: "删除后将移除相关纪要留痕，请确认无需继续处理。" },
    ],
  };
}

export function getAnalysisView(snapshot: DashboardSnapshot): AnalysisView {
  return {
    title: "台账同步",
    description: "查看纪要输出、责任事项和项目管理台账联动情况。",
    metrics: routeMetrics(snapshot),
    highlights: [
      "议题提取后应尽快补齐责任单位和完成时限，减少人工返工。",
      "重点项目会议优先同步到整改或进度台账，便于后续追踪。",
      "已同步纪要应作为项目例会复盘和责任考核依据。",
    ],
    tables: [
      {
        title: "最近同步对象",
        columns: [
          { key: "title", label: "会议/纪要" },
          { key: "status", label: "同步状态" },
          { key: "owner", label: "责任单位" },
        ],
        rows: snapshot.items.slice(0, 6).map((item) => ({ title: item.title, status: item.status, owner: item.owner })),
      },
      {
        title: "流程留痕",
        columns: [
          { key: "action", label: "动作" },
          { key: "content", label: "处理内容" },
          { key: "actor", label: "执行岗位" },
        ],
        rows: snapshot.events.slice(0, 6).map((event) => ({ action: event.action, content: event.content, actor: event.actor })),
      },
    ],
  };
}
