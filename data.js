// ═══════════════════════════════════════════════
// Linking Words Practice — Data File
// Edit this file to add/modify words, quiz sentences, and position guide.
// The HTML app loads this file via <script src="data.js">.
// ═══════════════════════════════════════════════

const WORDS = [
  {
    "cat": "Addition",
    "word": "Furthermore",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to add a stronger or more important point on top of what was just said.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Furthermore, the results suggest…' | Mid: 'The results, furthermore, suggest a stronger pattern.'",
    "note": "More formal than 'also' or 'in addition'. Use when the next point is stronger or more significant than the previous one.",
    "key_diff": "Furthermore > Moreover > In addition (increasing formality and emphasis)",
    "contexts": [
      {
        "ctx": "The intervention significantly reduced anxiety symptoms.",
        "sent": "Furthermore, participants reported improved sleep quality."
      },
      {
        "ctx": "Higher income inequality is associated with lower social trust.",
        "sent": "Furthermore, the relationship holds across different cultural contexts."
      },
      {
        "ctx": "The policy reduced carbon emissions by 12%.",
        "sent": "Furthermore, compliance costs were lower than projected."
      }
    ],
    "acad": [
      "Furthermore, the longitudinal data reveal a sustained decline in civic participation.",
      "The regression model accounts for socioeconomic status; furthermore, it controls for prior achievement."
    ],
    "daily": [
      "I finished the report early. Furthermore, I proofread it twice before sending.",
      "The apartment is spacious. Furthermore, it's only a 10-minute walk to the station."
    ],
    "pos_quiz": [
      {
        "sent": "Furthermore, the data support this interpretation.",
        "correct": true
      },
      {
        "sent": "The data, furthermore, support this interpretation.",
        "correct": true
      },
      {
        "sent": "The data furthermore support this interpretation.",
        "correct": false,
        "exp": "When placed mid-sentence, 'furthermore' must be enclosed by two commas."
      },
      {
        "sent": "She studied hard furthermore she passed the exam.",
        "correct": false,
        "exp": "'Furthermore' cannot join two independent clauses like a conjunction. Use a period or semicolon before it."
      },
      {
        "sent": "The data support this interpretation furthermore.",
        "correct": false,
        "exp": "'Furthermore' cannot be placed at the end of a sentence."
      }
    ],
    "alts": [
      "Moreover",
      "In addition"
    ]
  },
  {
    "cat": "Addition",
    "word": "Moreover",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to add a point that is even more important or convincing than the last.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Moreover, previous studies…' | Mid: 'The model, moreover, demonstrates superior fit.'",
    "note": "Slightly stronger than 'furthermore'. Signals: 'not only that — here is an even better reason'. Very common in academic papers.",
    "key_diff": "'Moreover' often introduces the most important supporting point in a paragraph.",
    "contexts": [
      {
        "ctx": "The treatment group showed significant improvement in depression scores.",
        "sent": "Moreover, the effect persisted at the six-month follow-up."
      },
      {
        "ctx": "Automation has displaced workers in manufacturing sectors.",
        "sent": "Moreover, the displacement disproportionately affects lower-skilled workers."
      },
      {
        "ctx": "The new drug reduced tumor size in 70% of patients.",
        "sent": "Moreover, it produced fewer side effects than the current standard treatment."
      }
    ],
    "acad": [
      "Moreover, the meta-analysis reveals consistent effects across 23 independent studies.",
      "The political polarization index has risen sharply; moreover, it shows no sign of reversing."
    ],
    "daily": [
      "The apartment is spacious. Moreover, it's only a 10-minute walk to campus.",
      "She speaks three languages. Moreover, she's fluent in all of them."
    ],
    "pos_quiz": [
      {
        "sent": "Moreover, the effect persisted at six months.",
        "correct": true
      },
      {
        "sent": "The effect, moreover, persisted at six months.",
        "correct": true
      },
      {
        "sent": "The effect moreover persisted at six months.",
        "correct": false,
        "exp": "Mid-sentence 'moreover' needs two commas around it."
      },
      {
        "sent": "He worked overtime moreover he finished early.",
        "correct": false,
        "exp": "'Moreover' cannot join two clauses without proper punctuation."
      },
      {
        "sent": "Moreover the meta-analysis reveals consistent effects.",
        "correct": false,
        "exp": "A comma is required after 'Moreover' at the start of a sentence."
      }
    ],
    "alts": [
      "Furthermore",
      "In addition"
    ]
  },
  {
    "cat": "Addition",
    "word": "In addition",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to add extra information or another point.",
    "pos": "Sentence-initial OR mid-sentence (in addition to + noun)",
    "pos_detail": "At the start: 'In addition, …' | Before a noun: 'In addition to X, …'",
    "note": "More neutral than 'furthermore' or 'moreover'. Works in both formal writing and everyday speech.",
    "key_diff": "'In addition to' is a preposition — it must be followed by a noun/noun phrase, not a full sentence.",
    "contexts": [
      {
        "ctx": "The study collected survey data from 1,200 participants.",
        "sent": "In addition, qualitative interviews were conducted with a subsample of 30."
      },
      {
        "ctx": "Regular exercise reduces the risk of cardiovascular disease.",
        "sent": "In addition, it is associated with improved mental health outcomes."
      },
      {
        "ctx": "The company reduced its energy consumption by 20%.",
        "sent": "In addition, it switched to renewable sources for 40% of its electricity."
      }
    ],
    "acad": [
      "In addition to self-report measures, the study included physiological indicators of stress.",
      "The model controls for age and gender; in addition, it accounts for regional variation."
    ],
    "daily": [
      "In addition to coffee, I'd also like some water, please.",
      "She works full-time. In addition, she takes evening classes twice a week."
    ],
    "pos_quiz": [
      {
        "sent": "In addition, qualitative interviews were conducted.",
        "correct": true
      },
      {
        "sent": "In addition to surveys, interviews were also conducted.",
        "correct": true
      },
      {
        "sent": "In addition to the server crashed, all data were lost.",
        "correct": false,
        "exp": "'In addition to' must be followed by a noun phrase, not a full clause."
      },
      {
        "sent": "The model controls for age; in addition, it accounts for regional variation.",
        "correct": true
      },
      {
        "sent": "In addition she takes evening classes twice a week.",
        "correct": false,
        "exp": "A comma is required after 'In addition' at the start of a sentence."
      }
    ],
    "alts": [
      "Furthermore",
      "Moreover"
    ]
  },
  {
    "cat": "Addition",
    "word": "Besides",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to add a point, often with a tone of 'and there's another thing…'",
    "pos": "Sentence-initial OR mid-sentence (besides + noun)",
    "pos_detail": "At the start: casual tone. Before a noun: 'Besides X, …'",
    "note": "In conversation, 'besides' often sounds like 'anyway' or 'plus'. In writing, use 'in addition' or 'furthermore' for a more formal tone.",
    "key_diff": "'Besides' can carry a slightly dismissive tone in speech: 'I don't want to go. Besides, it's raining.'",
    "contexts": [
      {
        "ctx": "I'm not sure this approach is the best choice.",
        "sent": "Besides, we don't have enough time to implement it properly."
      },
      {
        "ctx": "The qualitative findings add depth to the quantitative results.",
        "sent": "Besides the main themes, several unexpected patterns emerged."
      }
    ],
    "acad": [
      "Besides statistical significance, researchers must also report effect sizes and confidence intervals.",
      "Besides self-selection bias, the study faces threats from attrition."
    ],
    "daily": [
      "I don't want to go out tonight. Besides, it's raining.",
      "Besides being affordable, the restaurant is also surprisingly good."
    ],
    "pos_quiz": [
      {
        "sent": "Besides, we don't have enough time to implement it.",
        "correct": true
      },
      {
        "sent": "Besides the main themes, several unexpected patterns emerged.",
        "correct": true
      },
      {
        "sent": "Besides being affordable, the restaurant is also good.",
        "correct": true
      },
      {
        "sent": "I don't want to go besides it's raining.",
        "correct": false,
        "exp": "'Besides' cannot join two clauses without punctuation. Use a period or semicolon before it."
      },
      {
        "sent": "The study besides found unexpected results.",
        "correct": false,
        "exp": "'Besides' is not typically inserted mid-sentence between commas like 'however' or 'moreover'."
      }
    ],
    "alts": [
      "In addition",
      "Moreover"
    ]
  },
  {
    "cat": "Addition",
    "word": "Also",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to add more information, similar to 'too' or 'as well'.",
    "pos": "Mid-sentence (before main verb) OR sentence-initial (informal only)",
    "pos_detail": "Mid-sentence (most common): 'She also completed the survey.' | Sentence-initial (informal): 'Also, don't forget your ID.' — avoid in formal academic writing.",
    "note": "The most flexible addition word. In formal writing, it sits before the main verb. Sentence-initial 'Also,' is acceptable in emails but not in academic papers.",
    "key_diff": "'Also' at sentence start is informal. In formal writing, use 'In addition' or 'Furthermore' instead.",
    "contexts": [
      {
        "ctx": "The experiment measured reaction time.",
        "sent": "Participants were also asked to rate their confidence after each trial."
      },
      {
        "ctx": "The policy reduced unemployment in urban areas.",
        "sent": "It also improved housing stability in rural regions."
      }
    ],
    "acad": [
      "The survey also included an open-ended question about perceived barriers to healthcare access.",
      "Neuroticism also predicted anxiety symptoms over and above the other personality traits."
    ],
    "daily": [
      "I'll have the pasta. Can I also get a side salad?",
      "Also, don't forget to bring your ID tomorrow."
    ],
    "pos_quiz": [
      {
        "sent": "She also completed the survey.",
        "correct": true
      },
      {
        "sent": "Participants were also asked to rate their confidence.",
        "correct": true
      },
      {
        "sent": "Also, don't forget your ID tomorrow.",
        "correct": true
      },
      {
        "sent": "She completed the survey also.",
        "correct": false,
        "exp": "'Also' should not be placed at the end of a sentence. Place it before the main verb."
      },
      {
        "sent": "Also she completed the survey without any errors.",
        "correct": false,
        "exp": "When 'Also' starts a sentence, it needs a comma after it."
      }
    ],
    "alts": []
  },
  {
    "cat": "Addition",
    "word": "Not only … but also",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to emphasize that two things are both true, with the second being more surprising or important.",
    "pos": "Sentence-initial (inverted word order!) OR mid-sentence",
    "pos_detail": "At the start: 'Not only did she…, but she also…' (verb before subject!) | Mid: 'She not only X but also Y'",
    "note": "When 'Not only' starts a sentence, you must invert the subject and auxiliary verb (inversion). This grammar rule is obligatory in formal writing.",
    "key_diff": "Inversion: 'Not only DID the intervention reduce symptoms, but it also…' — 'did' must come before the subject.",
    "contexts": [
      {
        "ctx": "The public health campaign had several positive outcomes.",
        "sent": "Not only did vaccination rates increase, but it also reduced vaccine hesitancy."
      },
      {
        "ctx": "Economic sanctions affected the country in multiple ways.",
        "sent": "They not only reduced export revenue but also destabilized the currency."
      }
    ],
    "acad": [
      "Not only did the new policy reduce emissions, but it also created 15,000 jobs in the renewable sector.",
      "The therapy not only alleviated depressive symptoms but also improved quality of life."
    ],
    "daily": [
      "She's not only smart but also incredibly kind.",
      "Not only was he late, but he also forgot to bring the documents."
    ],
    "pos_quiz": [
      {
        "sent": "Not only did the intervention improve scores, but it also raised confidence.",
        "correct": true
      },
      {
        "sent": "She not only finished early but also proofread the report.",
        "correct": true
      },
      {
        "sent": "Not only she finished early, but she also proofread it.",
        "correct": false,
        "exp": "When 'Not only' starts a sentence, subject-auxiliary inversion is required: 'Not only did she finish…'"
      },
      {
        "sent": "Not only was he late, but he also forgot the documents.",
        "correct": true
      },
      {
        "sent": "She not only finished early but she proofread it also.",
        "correct": false,
        "exp": "'Also' should come before the verb: '…but she also proofread it.'"
      }
    ],
    "alts": []
  },
  {
    "cat": "Contrast",
    "word": "However",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce information that contrasts with or is surprising given what was just said.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'However, the results…' | Mid: 'The results, however, were…'",
    "note": "The most widely used contrast word. Both positions are correct. Mid-sentence adds variety and emphasis.",
    "key_diff": "Do NOT use 'however' as a conjunction between clauses: ✗ 'I tried however I failed.' ✓ 'I tried. However, I failed.'",
    "contexts": [
      {
        "ctx": "Early studies suggested that social media use was linked to depression.",
        "sent": "However, more recent meta-analyses have found much weaker and inconsistent effects."
      },
      {
        "ctx": "The economic model predicted a rapid recovery after the recession.",
        "sent": "However, unemployment remained elevated for several years."
      },
      {
        "ctx": "The drug performed well in laboratory conditions.",
        "sent": "The clinical trial results, however, were far less encouraging."
      }
    ],
    "acad": [
      "However, the cross-sectional design limits causal interpretation of these findings.",
      "The correlation was strong; the effect size, however, was too small to be clinically meaningful."
    ],
    "daily": [
      "I wanted to go hiking. However, it started raining.",
      "The food was excellent. The service, however, was painfully slow."
    ],
    "pos_quiz": [
      {
        "sent": "However, the results were inconclusive.",
        "correct": true
      },
      {
        "sent": "The results, however, were inconclusive.",
        "correct": true
      },
      {
        "sent": "I tried hard however I failed.",
        "correct": false,
        "exp": "'However' cannot be used as a conjunction between two clauses. Use a period or semicolon before it."
      },
      {
        "sent": "However the results were inconclusive.",
        "correct": false,
        "exp": "A comma is required after 'However' at the start of a sentence."
      },
      {
        "sent": "The experiment worked. The results, however, need replication.",
        "correct": true
      }
    ],
    "alts": [
      "Nevertheless",
      "Nonetheless"
    ]
  },
  {
    "cat": "Contrast",
    "word": "Nevertheless",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to say something is still true or valid despite what was just mentioned.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Nevertheless, the study…' | Mid: 'The study, nevertheless, contributes…'",
    "note": "More formal than 'however'. It fully accepts the concession and says: 'Yes, this is a real problem — but the conclusion still holds.'",
    "key_diff": "'Nevertheless' accepts a concession more fully than 'however': 'Yes, there are limits. Nevertheless, the findings are useful.'",
    "contexts": [
      {
        "ctx": "The sample size was relatively small and may limit generalizability.",
        "sent": "Nevertheless, the findings are consistent with prior longitudinal research."
      },
      {
        "ctx": "Critics raised valid concerns about the methodology.",
        "sent": "Nevertheless, the policy was implemented on schedule."
      }
    ],
    "acad": [
      "The study relied on self-reported data, which is subject to recall bias; nevertheless, the patterns are compelling.",
      "Nevertheless, the theoretical contribution of this work extends well beyond the immediate empirical findings."
    ],
    "daily": [
      "The task was incredibly challenging. Nevertheless, we finished on time.",
      "He was exhausted after the long journey. Nevertheless, he kept going."
    ],
    "pos_quiz": [
      {
        "sent": "Nevertheless, the findings are consistent with prior research.",
        "correct": true
      },
      {
        "sent": "The findings, nevertheless, remain useful.",
        "correct": true
      },
      {
        "sent": "The sample was small nevertheless the results are clear.",
        "correct": false,
        "exp": "'Nevertheless' cannot join two clauses without punctuation. Use a period or semicolon."
      },
      {
        "sent": "Nevertheless the study contributed to the field.",
        "correct": false,
        "exp": "A comma is required after 'Nevertheless' at the start of a sentence."
      },
      {
        "sent": "The limitations are real; nevertheless, the conclusions hold.",
        "correct": true
      }
    ],
    "alts": [
      "However",
      "Nonetheless"
    ]
  },
  {
    "cat": "Contrast",
    "word": "Nonetheless",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to say something remains true or important despite an opposing point.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Nonetheless, the evidence supports…' | Mid: 'The evidence, nonetheless, supports the hypothesis.'",
    "note": "Almost identical to 'nevertheless'. Slightly less formal. Either is correct — just be consistent in one piece of writing.",
    "key_diff": "'Nevertheless' vs 'Nonetheless': They are interchangeable. Don't use both in the same paragraph.",
    "contexts": [
      {
        "ctx": "The replication sample differed in several demographic characteristics.",
        "sent": "Nonetheless, the core findings replicated across both groups."
      },
      {
        "ctx": "Randomized assignment was not feasible in this naturalistic setting.",
        "sent": "Nonetheless, several design features helped reduce confounding."
      }
    ],
    "acad": [
      "The experiment lacked ecological validity; nonetheless, it provides important mechanistic insights.",
      "The sample was not fully representative of the national population; nonetheless, comparisons were conducted with appropriate caution."
    ],
    "daily": [
      "It was cold and windy. Nonetheless, they decided to go for a walk.",
      "The plan had some obvious flaws. Nonetheless, it was unanimously approved."
    ],
    "pos_quiz": [
      {
        "sent": "Nonetheless, the core findings replicated across groups.",
        "correct": true
      },
      {
        "sent": "The findings, nonetheless, replicated across both samples.",
        "correct": true
      },
      {
        "sent": "The design was imperfect nonetheless results were robust.",
        "correct": false,
        "exp": "'Nonetheless' cannot join two clauses without proper punctuation."
      },
      {
        "sent": "Nonetheless the study has considerable merit.",
        "correct": false,
        "exp": "A comma is required after 'Nonetheless' at the start of a sentence."
      },
      {
        "sent": "Randomization was not feasible; nonetheless, confounds were controlled.",
        "correct": true
      }
    ],
    "alts": [
      "However",
      "Nevertheless"
    ]
  },
  {
    "cat": "Contrast",
    "word": "On the other hand",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to present the opposite or contrasting side of an argument or situation.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'On the other hand, qualitative methods offer richer context.' | Mid: 'Quantitative approaches, on the other hand, allow for broader generalization.'",
    "note": "Specifically signals TWO different perspectives being weighed. Often paired with 'On one hand…'.",
    "key_diff": "'On one hand, X. On the other hand, Y.' — use this structure when genuinely comparing two sides of an argument.",
    "contexts": [
      {
        "ctx": "Strict environmental regulations can reduce industrial pollution.",
        "sent": "On the other hand, they may impose significant costs on businesses and consumers."
      },
      {
        "ctx": "Remote work increases employee flexibility and reduces commute time.",
        "sent": "On the other hand, it can erode team cohesion and informal knowledge sharing."
      }
    ],
    "acad": [
      "Qualitative methods provide rich contextual insight; on the other hand, they limit generalizability.",
      "On the other hand, critics argue that the model sacrifices explanatory depth for predictive accuracy."
    ],
    "daily": [
      "The job pays really well. On the other hand, the hours are brutal.",
      "Living in the city is convenient. On the other hand, it's extremely expensive."
    ],
    "pos_quiz": [
      {
        "sent": "On the other hand, the costs may outweigh the benefits.",
        "correct": true
      },
      {
        "sent": "Quantitative approaches, on the other hand, allow for broader generalization.",
        "correct": true
      },
      {
        "sent": "The job pays well on the other hand the hours are long.",
        "correct": false,
        "exp": "'On the other hand' needs punctuation before it when connecting two clauses."
      },
      {
        "sent": "On the other hand the evidence remains weak.",
        "correct": false,
        "exp": "A comma is required after 'On the other hand' at the start of a sentence."
      },
      {
        "sent": "Remote work is flexible; on the other hand, it can feel isolating.",
        "correct": true
      }
    ],
    "alts": [
      "However"
    ]
  },
  {
    "cat": "Contrast",
    "word": "Although / Though",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce a fact that makes the main statement surprising or unexpected.",
    "pos": "Sentence-initial OR after main clause OR sentence-final ('though' only, informal)",
    "pos_detail": "Start: 'Although it rained, we went out.' | After main clause: 'We went out, although it rained.' | Sentence-final ('though' only): 'I liked the movie, though.' — 'although' CANNOT end a sentence; only 'though' can.",
    "note": "'Although' is more formal. 'Though' is more common in speech. 'Even though' is stronger — use it when the contrast is very surprising.",
    "key_diff": "Never write 'although … but': ✗ 'Although she tried, but she failed.' — pick one: 'Although she tried, she failed.' ✓",
    "contexts": [
      {
        "ctx": "",
        "sent": "Although the sample size was large, the effect was not statistically significant."
      },
      {
        "ctx": "",
        "sent": "Although income inequality has grown, social mobility has remained relatively stable."
      },
      {
        "ctx": "The results were surprising in some ways.",
        "sent": "The core hypothesis was supported, though the effect size was smaller than expected."
      }
    ],
    "acad": [
      "Although the intervention was brief, it produced lasting changes in health behavior.",
      "The correlation was positive, though it did not reach the conventional threshold for significance."
    ],
    "daily": [
      "Although I was tired, I stayed up to finish the report.",
      "I liked the conference, though some of the sessions ran too long."
    ],
    "pos_quiz": [
      {
        "sent": "Although the sample was small, the effect was statistically significant.",
        "correct": true
      },
      {
        "sent": "The effect was clear although the sample was small.",
        "correct": true
      },
      {
        "sent": "Although the sample was small but the effect was clear.",
        "correct": false,
        "exp": "Never use 'although' and 'but' together. Pick one: 'Although X, Y.' or 'X, but Y.'"
      },
      {
        "sent": "I liked the movie, though.",
        "correct": true
      },
      {
        "sent": "I liked the movie, although.",
        "correct": false,
        "exp": "'Although' cannot end a sentence. Only 'though' can be used sentence-finally."
      }
    ],
    "alts": [
      "While"
    ]
  },
  {
    "cat": "Contrast",
    "word": "While",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to contrast two facts that differ — or to show two things happening at the same time.",
    "pos": "Sentence-initial (contrast clause first) OR mid-sentence",
    "pos_detail": "'While Study A found benefits, Study B found none.' | 'He favors quantitative methods, while his co-author prefers qualitative approaches.'",
    "note": "'While' can mean 'at the same time as' (time) OR 'whereas / although' (contrast). Context usually makes the meaning clear.",
    "key_diff": "Time: 'While I was analyzing data, she wrote the introduction.' | Contrast: 'While men showed higher risk tolerance, women showed more consistent returns.' — different subjects signal contrast.",
    "contexts": [
      {
        "ctx": "",
        "sent": "While developed countries have reduced emissions, developing nations have seen rapid increases."
      },
      {
        "ctx": "",
        "sent": "While cognitive behavioral therapy targets thought patterns, medication addresses neurochemical imbalances."
      }
    ],
    "acad": [
      "While the quantitative results were robust, the qualitative accounts revealed important nuance.",
      "While short-term outcomes improved, the long-term effects remained unclear at the time of publication."
    ],
    "daily": [
      "While I prefer working in the morning, my colleague is a night owl.",
      "He studied economics, while his sister chose to study law."
    ],
    "pos_quiz": [
      {
        "sent": "While Study A found benefits, Study B found none.",
        "correct": true
      },
      {
        "sent": "He prefers tea, while she prefers coffee.",
        "correct": true
      },
      {
        "sent": "While the results were strong. The sample was small.",
        "correct": false,
        "exp": "A 'while' clause is dependent and cannot stand alone as a sentence. Remove the period and use a comma."
      },
      {
        "sent": "While developed countries reduced emissions developing nations increased them.",
        "correct": false,
        "exp": "A comma is needed after the 'while' clause: 'While X, Y.'"
      },
      {
        "sent": "She analyzed the data while he wrote the introduction.",
        "correct": true
      }
    ],
    "alts": [
      "Whereas"
    ]
  },
  {
    "cat": "Contrast",
    "word": "Yet",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce a surprising or unexpected contrast — similar to 'but', but stronger.",
    "pos": "Sentence-initial (no comma needed) OR mid-sentence as a coordinating conjunction",
    "pos_detail": "'He tried hard, yet he failed.' — comma before 'yet' when connecting two complete clauses.",
    "note": "'Yet' is more literary and emphatic than 'but'. It often conveys irony or tension between two facts. As a coordinating conjunction (FANBOYS), 'yet' connects equal but contrasting ideas, similar to 'but' but stronger.",
    "key_diff": "'But' is neutral. 'Yet' adds weight: 'The effect was small, yet it has profound practical implications.'",
    "contexts": [
      {
        "ctx": "The government invested heavily in public health infrastructure.",
        "sent": "Yet life expectancy in the lowest income quartile barely improved."
      },
      {
        "ctx": "Decades of research have documented the benefits of sleep.",
        "sent": "Yet sleep deprivation remains normalized in many professional cultures."
      }
    ],
    "acad": [
      "The correlation was modest, yet it was remarkably consistent across 18 countries.",
      "Decades of anti-poverty programs have been implemented; yet wealth inequality continues to widen."
    ],
    "daily": [
      "She studied for weeks, yet she still felt unprepared.",
      "It was a small gesture, yet it meant everything to her."
    ],
    "pos_quiz": [
      {
        "sent": "The effect was small, yet it has profound implications.",
        "correct": true
      },
      {
        "sent": "Yet life expectancy barely improved.",
        "correct": true
      },
      {
        "sent": "He is young yet experienced.",
        "correct": true
      },
      {
        "sent": "She tried hard, yet, she failed the exam.",
        "correct": false,
        "exp": "When 'yet' is used as a conjunction, do not put a comma after it: '…hard, yet she failed.'"
      },
      {
        "sent": "The results were surprising yet they were consistent across groups.",
        "correct": false,
        "exp": "A comma is needed before 'yet' when it joins two independent clauses."
      }
    ],
    "alts": [
      "But"
    ]
  },
  {
    "cat": "Contrast",
    "word": "In contrast",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to show a sharp or clear difference between two things.",
    "pos": "Sentence-initial (most common) OR mid-sentence via 'in contrast to + noun'",
    "pos_detail": "Start: 'In contrast, the control group…' | With noun: 'In contrast to high-income households, low-income families…'",
    "note": "'In contrast' signals a strong, clear difference — more forceful than 'however'. Use it when the comparison is the main point.",
    "key_diff": "'In contrast to' is a preposition — must be followed by a noun phrase: ✓ 'In contrast to last year…' ✗ 'In contrast to results improved…'",
    "contexts": [
      {
        "ctx": "Nordic countries consistently rank high on social trust indices.",
        "sent": "In contrast, Southern and Eastern European countries show markedly lower trust levels."
      },
      {
        "ctx": "Men in the study reported higher job satisfaction.",
        "sent": "Women, in contrast, placed greater emphasis on work-life balance than on salary."
      }
    ],
    "acad": [
      "In contrast to the experimental group, controls showed no significant change over the 12-week period.",
      "Urbanization rates in Sub-Saharan Africa are accelerating; in contrast, many East Asian cities have begun to shrink."
    ],
    "daily": [
      "In contrast to last winter, this year has been unusually mild.",
      "My brother loves spicy food. In contrast, I can barely handle any heat."
    ],
    "pos_quiz": [
      {
        "sent": "In contrast, the control group showed no significant change.",
        "correct": true
      },
      {
        "sent": "In contrast to high-income families, low-income families struggled.",
        "correct": true
      },
      {
        "sent": "Women, in contrast, valued work-life balance more highly.",
        "correct": true
      },
      {
        "sent": "In contrast to results improved, the baseline remained weak.",
        "correct": false,
        "exp": "'In contrast to' must be followed by a noun phrase, not a full clause."
      },
      {
        "sent": "The treatment group improved in contrast the control did not.",
        "correct": false,
        "exp": "'In contrast' needs punctuation before it when connecting two clauses."
      }
    ],
    "alts": [
      "Conversely"
    ]
  },
  {
    "cat": "Cause/Effect",
    "word": "Therefore",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce a logical conclusion that follows from the evidence or argument just presented.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Therefore, the null hypothesis…' | Mid: 'The null hypothesis, therefore, was rejected.'",
    "note": "The most widely used word for showing a logical conclusion. Works in both formal and informal writing.",
    "key_diff": "'Therefore' introduces a conclusion based on logic or evidence — it is not used for purely emotional reasons.",
    "contexts": [
      {
        "ctx": "The confidence interval did not include zero.",
        "sent": "Therefore, the null hypothesis of no effect was rejected."
      },
      {
        "ctx": "Unemployment is strongly associated with poor mental health outcomes.",
        "sent": "Therefore, labor market policies should be central to any mental health strategy."
      },
      {
        "ctx": "The variance explained by the model exceeded 80%.",
        "sent": "The model was, therefore, deemed suitable for prediction purposes."
      }
    ],
    "acad": [
      "The distribution of residuals was highly skewed; therefore, non-parametric tests were used.",
      "Access to clean water is unevenly distributed; therefore, public health interventions must be geographically targeted."
    ],
    "daily": [
      "It was raining heavily. Therefore, we cancelled the outdoor event.",
      "She trained every day. Therefore, it was no surprise when she won."
    ],
    "pos_quiz": [
      {
        "sent": "Therefore, the null hypothesis was rejected.",
        "correct": true
      },
      {
        "sent": "The hypothesis was, therefore, rejected.",
        "correct": true
      },
      {
        "sent": "The data were normal therefore parametric tests were used.",
        "correct": false,
        "exp": "'Therefore' cannot join two clauses without punctuation. Use a period or semicolon."
      },
      {
        "sent": "Therefore the null hypothesis was rejected.",
        "correct": false,
        "exp": "A comma is required after 'Therefore' at the start of a sentence."
      },
      {
        "sent": "Access is uneven; therefore, interventions must be targeted.",
        "correct": true
      }
    ],
    "alts": [
      "Thus",
      "Consequently",
      "As a result"
    ]
  },
  {
    "cat": "Cause/Effect",
    "word": "Thus",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to show a direct result or logical conclusion — more concise than 'therefore'.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (no comma needed after verb)",
    "pos_detail": "'Thus, the model…' OR 'Incomes rose sharply, thus reducing the poverty rate.'",
    "note": "'Thus' is slightly more formal and concise than 'therefore'. In academic writing, it often appears mid-sentence without a comma.",
    "key_diff": "'Therefore' is more common in general writing. 'Thus' is typical in scientific papers, especially in methods and results sections.",
    "contexts": [
      {
        "ctx": "The two groups were equivalent on all baseline measures.",
        "sent": "Thus, observed differences at post-test can be attributed to the intervention."
      },
      {
        "ctx": "GDP growth was driven primarily by consumption rather than investment.",
        "sent": "The recovery was, thus, more fragile than headline figures suggested."
      }
    ],
    "acad": [
      "Brain activation in the amygdala increased during threat processing, thus confirming the role of this region in fear responses.",
      "The model converged after 200 iterations, thus confirming numerical stability."
    ],
    "daily": [
      "He arrived an hour late, thus missing the entire first session.",
      "She missed the final exam and thus failed to complete the course."
    ],
    "pos_quiz": [
      {
        "sent": "Thus, the model was deemed suitable for prediction.",
        "correct": true
      },
      {
        "sent": "Incomes rose sharply, thus reducing the poverty rate.",
        "correct": true
      },
      {
        "sent": "The recovery was, thus, more fragile than expected.",
        "correct": true
      },
      {
        "sent": "Thus the observed differences can be attributed to the intervention.",
        "correct": false,
        "exp": "A comma is required after 'Thus' at the start of a sentence."
      },
      {
        "sent": "The data confirmed the theory thus.",
        "correct": false,
        "exp": "'Thus' cannot be placed at the end of a sentence."
      }
    ],
    "alts": [
      "Therefore",
      "Consequently",
      "Hence"
    ]
  },
  {
    "cat": "Cause/Effect",
    "word": "Hence",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to show a direct logical consequence — similar to 'therefore' but more formal.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (with commas) OR before a noun phrase (no verb needed)",
    "pos_detail": "Start: 'Hence, caution is needed.' | Mid: 'Three items were, hence, removed.' | Before noun (no comma): 'Hence the term cognitive load.'",
    "note": "'Hence' is the most formal of the three (therefore / thus / hence). Very common in conclusions. Also used in the fixed phrase 'hence the name/term'.",
    "key_diff": "'Hence the term X' is a useful academic shorthand: 'The model allows multiple pathways — hence the term general diagnostic model.'",
    "contexts": [
      {
        "ctx": "Participants were not randomly assigned to conditions.",
        "sent": "Hence, the results should be interpreted with caution."
      },
      {
        "ctx": "The construct was originally developed in a Western context.",
        "sent": "Hence the need for cross-cultural validation before broader application."
      }
    ],
    "acad": [
      "Response rates fell below 40%; hence, potential non-response bias cannot be ruled out.",
      "The variable captures both frequency and intensity of exposure — hence the term composite risk score."
    ],
    "daily": [
      "She studied abroad for three years; hence, her fluency in French.",
      "The road was icy; hence the accident at the intersection."
    ],
    "pos_quiz": [
      {
        "sent": "Hence, the results should be interpreted with caution.",
        "correct": true
      },
      {
        "sent": "Hence the term cognitive load.",
        "correct": true
      },
      {
        "sent": "Hence the results should be interpreted with caution.",
        "correct": false,
        "exp": "When 'hence' introduces a full clause (with a verb), a comma is required. Without a verb ('Hence the term X'), no comma is needed."
      },
      {
        "sent": "Three items were, hence, removed from the analysis.",
        "correct": true
      },
      {
        "sent": "The findings are inconclusive; hence, more research is needed.",
        "correct": true
      }
    ],
    "alts": [
      "Therefore",
      "Thus"
    ]
  },
  {
    "cat": "Cause/Effect",
    "word": "Consequently",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to introduce a direct and often significant result that follows from a cause.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between commas)",
    "pos_detail": "'Consequently, the policy was revised.' | 'Three agencies were, consequently, merged.'",
    "note": "'Consequently' carries more weight than 'therefore' — it suggests the result was inevitable or had real impact.",
    "key_diff": "'Therefore' is neutral. 'Consequently' implies the result had noticeable consequences: 'Funding was cut. Consequently, 200 positions were eliminated.'",
    "contexts": [
      {
        "ctx": "The primary data source was found to contain systematic errors.",
        "sent": "Consequently, the entire dataset had to be reprocessed before analysis."
      },
      {
        "ctx": "Trust in government institutions declined sharply after the scandal.",
        "sent": "Voter turnout, consequently, fell to a historic low at the next election."
      }
    ],
    "acad": [
      "Income inequality widened significantly during this period; consequently, social mobility declined across most demographic groups.",
      "The drug failed Phase II trials; consequently, the research program was discontinued."
    ],
    "daily": [
      "He skipped breakfast every day. Consequently, he was exhausted by noon.",
      "The project was severely underfunded. Consequently, several key milestones were missed."
    ],
    "pos_quiz": [
      {
        "sent": "Consequently, the entire dataset had to be reprocessed.",
        "correct": true
      },
      {
        "sent": "Voter turnout, consequently, fell to a historic low.",
        "correct": true
      },
      {
        "sent": "The data contained errors consequently the analysis was redone.",
        "correct": false,
        "exp": "'Consequently' cannot join two clauses without punctuation."
      },
      {
        "sent": "Consequently the program was discontinued.",
        "correct": false,
        "exp": "A comma is required after 'Consequently' at the start of a sentence."
      },
      {
        "sent": "Funding was cut; consequently, 200 positions were eliminated.",
        "correct": true
      }
    ],
    "alts": [
      "Therefore",
      "Thus",
      "As a result"
    ]
  },
  {
    "cat": "Cause/Effect",
    "word": "As a result",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce what happened because of something — a clear cause-and-effect relationship.",
    "pos": "Sentence-initial (most common) OR mid-sentence via 'as a result of + noun'",
    "pos_detail": "Start: 'As a result, the deadline was extended.' | With noun phrase: 'Life expectancy fell as a result of the famine.'",
    "note": "More conversational than 'consequently' or 'therefore'. Works naturally in both everyday writing and formal reports.",
    "key_diff": "'As a result of + noun' links the cause directly: 'As a result of the recession, unemployment doubled.' — 'of' must be followed by a noun, not a full clause.",
    "contexts": [
      {
        "ctx": "The intervention significantly increased physical activity in participants.",
        "sent": "As a result, average BMI declined by 1.2 points over six months."
      },
      {
        "ctx": "Trade barriers were reduced under the new bilateral agreement.",
        "sent": "Exports grew rapidly as a result of the increased market access."
      }
    ],
    "acad": [
      "Access to antiretroviral therapy expanded rapidly; as a result, HIV-related mortality fell by over 60% in the region.",
      "As a result of the methodological limitations, the authors recommend replication with a larger probability sample."
    ],
    "daily": [
      "I stayed up until 2 a.m. As a result, I overslept and missed my meeting.",
      "The team communicated clearly throughout the project. As a result, it was delivered ahead of schedule."
    ],
    "pos_quiz": [
      {
        "sent": "As a result, average BMI declined by 1.2 points.",
        "correct": true
      },
      {
        "sent": "Life expectancy fell as a result of the famine.",
        "correct": true
      },
      {
        "sent": "As a result of the server crashed, data were lost.",
        "correct": false,
        "exp": "'As a result of' must be followed by a noun phrase, not a full clause."
      },
      {
        "sent": "As a result the deadline was extended by two weeks.",
        "correct": false,
        "exp": "A comma is required after 'As a result' at the start of a sentence."
      },
      {
        "sent": "Exports grew rapidly; as a result, trade surpluses emerged.",
        "correct": true
      }
    ],
    "alts": [
      "Therefore",
      "Consequently"
    ]
  },
  {
    "cat": "Cause/Effect",
    "word": "Because / Since / As",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to give the reason or cause for something.",
    "pos": "Sentence-initial (reason clause first) OR mid-sentence (reason clause after main clause)",
    "pos_detail": "'Because it rained, we stayed in.' | 'We stayed in because it rained.' | 'Since the data were normal, t-tests were used.'",
    "note": "'Because' directly answers WHY and is the strongest. 'Since' and 'as' introduce a reason that is already known or less emphasized.",
    "key_diff": "'Because' = new or important reason. 'Since/As' = background or known reason: 'Since randomization was not feasible, propensity matching was used.'",
    "contexts": [
      {
        "ctx": "",
        "sent": "Because the distribution was heavily skewed, a log transformation was applied."
      },
      {
        "ctx": "",
        "sent": "Since both groups were equivalent at baseline, post-test differences can be attributed to the treatment."
      }
    ],
    "acad": [
      "Because the outcome variable was binary, logistic regression was used rather than OLS.",
      "As the literature offers no consensus on the directionality, the analysis remains exploratory."
    ],
    "daily": [
      "I'm staying home today because I have a terrible headache.",
      "Since you're already here, why don't you stay for dinner?"
    ],
    "pos_quiz": [
      {
        "sent": "Because the distribution was skewed, a log transformation was applied.",
        "correct": true
      },
      {
        "sent": "We stayed in because it was raining heavily.",
        "correct": true
      },
      {
        "sent": "Because of heavy rain, the event was cancelled.",
        "correct": true
      },
      {
        "sent": "Because of it was raining, we stayed indoors.",
        "correct": false,
        "exp": "'Because of' must be followed by a noun phrase, not a clause. Use 'Because' (without 'of') for clauses."
      },
      {
        "sent": "Because the distribution was skewed. A transformation was applied.",
        "correct": false,
        "exp": "A 'because' clause is dependent and cannot stand alone. Use a comma: 'Because X, Y.'"
      }
    ],
    "alts": []
  },
  {
    "cat": "Cause/Effect",
    "word": "Due to",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to give the cause or reason for something — specifically before a noun or noun phrase.",
    "pos": "Sentence-initial OR mid-sentence — but ALWAYS followed by a noun phrase, never a full clause",
    "pos_detail": "✓ 'Due to data loss, …' | ✗ 'Due to the server crashed, …' (wrong — use 'because' instead)",
    "note": "'Due to' is a preposition, not a conjunction. It cannot introduce a full sentence — only a noun or noun phrase.",
    "key_diff": "'Due to' = noun follows. 'Because' = full sentence follows. Can you replace 'due to' with 'because of'? If yes, it's correct usage.",
    "contexts": [
      {
        "ctx": "The study could not be completed as originally planned.",
        "sent": "Due to high attrition, the final sample was substantially smaller than anticipated."
      },
      {
        "ctx": "Several participants withdrew before the end of the study.",
        "sent": "Their withdrawal was due to scheduling conflicts rather than adverse effects."
      }
    ],
    "acad": [
      "Due to missing data on key covariates, 87 cases were excluded from the primary analysis.",
      "The observed discrepancy is likely due to response bias in the self-report instrument."
    ],
    "daily": [
      "The flight was delayed due to severe weather conditions.",
      "Due to heavy traffic, I arrived almost 30 minutes late."
    ],
    "pos_quiz": [
      {
        "sent": "Due to high attrition, the final sample was smaller than expected.",
        "correct": true
      },
      {
        "sent": "The delay was due to scheduling conflicts.",
        "correct": true
      },
      {
        "sent": "Due to the server crashed, data were lost.",
        "correct": false,
        "exp": "'Due to' must be followed by a noun phrase, not a clause. Use 'Because' for clauses."
      },
      {
        "sent": "Due to heavy traffic, I arrived 30 minutes late.",
        "correct": true
      },
      {
        "sent": "Due to there were too many dropouts, the study was underpowered.",
        "correct": false,
        "exp": "'Due to' cannot introduce a full clause. Write 'Because there were…' instead."
      }
    ],
    "alts": []
  },
  {
    "cat": "Sequence",
    "word": "First / Firstly",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce the first item in a list of steps, reasons, or points.",
    "pos": "Sentence-initial (followed by a comma)",
    "pos_detail": "'First, the data were collected. Second, they were coded. Finally, …'",
    "note": "Always use in a series: 'first … second … finally'. 'Firstly' sounds slightly more formal than 'first'. Be consistent — don't mix styles.",
    "key_diff": "Don't mix: ✗ 'Firstly … second … lastly' — be consistent: use either 'first/second/third' or 'firstly/secondly/thirdly' throughout.",
    "contexts": [
      {
        "ctx": "There are three main reasons to be cautious about this finding.",
        "sent": "First, the sample was not randomly selected from the population."
      },
      {
        "ctx": "The analysis proceeds in two stages.",
        "sent": "First, descriptive statistics are reported for all variables."
      }
    ],
    "acad": [
      "First, the construct validity of the scale is established; second, its predictive validity is assessed.",
      "Firstly, the study design will be described; secondly, the sampling procedure will be explained."
    ],
    "daily": [
      "First, preheat the oven to 200°C. Then, prepare the filling.",
      "First, let's agree on the goal; then we can talk about how to get there."
    ],
    "pos_quiz": [
      {
        "sent": "First, the data were collected from all participating sites.",
        "correct": true
      },
      {
        "sent": "Firstly, the construct validity of the scale is established.",
        "correct": true
      },
      {
        "sent": "First the sample was not randomly selected from the population.",
        "correct": false,
        "exp": "A comma is required after 'First' when used as a sequence marker at the start of a sentence."
      },
      {
        "sent": "Firstly, the design will be described; secondly, the sampling will be explained.",
        "correct": true
      },
      {
        "sent": "The data were first collected, then analyzed and coded.",
        "correct": true
      }
    ],
    "alts": []
  },
  {
    "cat": "Sequence",
    "word": "Subsequently",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to describe something that happened or came after something else.",
    "pos": "Sentence-initial (with comma) OR mid-sentence",
    "pos_detail": "'Participants completed a pre-test; subsequently, they received the treatment.'",
    "note": "More formal than 'then' or 'after that'. Emphasizes that the second event directly followed the first.",
    "key_diff": "'Then' is casual. 'Subsequently' is formal: 'Data were collected; subsequently, they were cleaned and coded.'",
    "contexts": [
      {
        "ctx": "Blood samples were taken before the intervention began.",
        "sent": "Subsequently, participants received either the drug or a placebo for 12 weeks."
      },
      {
        "ctx": "The initial proposal was rejected by the ethics committee.",
        "sent": "The researchers subsequently revised the protocol and resubmitted for approval."
      }
    ],
    "acad": [
      "Participants completed a baseline questionnaire; subsequently, they were randomly assigned to experimental conditions.",
      "The legislation was passed in 2018; subsequently, enforcement mechanisms were gradually introduced."
    ],
    "daily": [
      "She got the promotion and subsequently moved to the company's head office.",
      "The announcement was made on Friday; subsequently, shares rose 8% by Monday morning."
    ],
    "pos_quiz": [
      {
        "sent": "Subsequently, participants received the treatment for 12 weeks.",
        "correct": true
      },
      {
        "sent": "The researchers subsequently revised the protocol and resubmitted.",
        "correct": true
      },
      {
        "sent": "Subsequently the legislation was gradually enforced across all regions.",
        "correct": false,
        "exp": "A comma is required after 'Subsequently' at the start of a sentence."
      },
      {
        "sent": "Blood samples were taken; subsequently, participants received the drug.",
        "correct": true
      },
      {
        "sent": "The proposal was rejected subsequently.",
        "correct": false,
        "exp": "'Subsequently' is not typically placed at the end of a sentence."
      }
    ],
    "alts": [
      "Then / Next"
    ]
  },
  {
    "cat": "Sequence",
    "word": "Then / Next",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to describe what comes after in a sequence of events or steps.",
    "pos": "Sentence-initial (most common) OR mid-sentence",
    "pos_detail": "'We had dinner, then went for a walk.' | 'Next, add the eggs to the mixture.'",
    "note": "'Then' is very natural in both speech and writing. 'Next' is slightly more structured, often used in instructions or formal procedures.",
    "key_diff": "'Next' implies a clear next step in a list. 'Then' implies a natural sequence in time.",
    "contexts": [
      {
        "ctx": "The raw data were downloaded from the government database.",
        "sent": "They were then merged with census records at the district level."
      },
      {
        "ctx": "Interviews were transcribed verbatim.",
        "sent": "Next, the transcripts were coded using a thematic analysis framework."
      }
    ],
    "acad": [
      "The data were cleaned and screened for outliers; they were then subjected to multilevel regression analysis.",
      "Next, hierarchical regression models were estimated to test the mediating role of self-efficacy."
    ],
    "daily": [
      "We had dinner, then went for a walk along the river.",
      "Finish the introduction first, then move on to the methods section."
    ],
    "pos_quiz": [
      {
        "sent": "Next, the transcripts were coded using thematic analysis.",
        "correct": true
      },
      {
        "sent": "The data were then merged with census records at the district level.",
        "correct": true
      },
      {
        "sent": "We had dinner, then went for a walk along the river.",
        "correct": true
      },
      {
        "sent": "Next the transcripts were coded and analyzed for themes.",
        "correct": false,
        "exp": "A comma is required after 'Next' when used as a sequence marker at the start of a sentence."
      },
      {
        "sent": "Then she completed the final section of the survey.",
        "correct": true
      }
    ],
    "alts": [
      "Subsequently"
    ]
  },
  {
    "cat": "Sequence",
    "word": "Finally / Lastly",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce the last item in a list or the last step in a sequence.",
    "pos": "Sentence-initial (most common) OR mid/sentence-final ('finally' only, time meaning)",
    "pos_detail": "Sequence marker (both): 'Finally, the conclusions are presented.' | 'Lastly, I'd like to thank…' | 'Finally' also means 'at last': 'She finally arrived.' — 'Lastly' only ever closes a list.",
    "note": "'Finally' can also mean 'after a long wait'. 'Lastly' is exclusively used to close a list — it avoids this ambiguity.",
    "key_diff": "In academic writing, 'lastly' is safer because 'finally' might be misread as expressing relief or impatience.",
    "contexts": [
      {
        "ctx": "Three predictors were entered in the regression model.",
        "sent": "Finally, interaction terms were added to test for moderation effects."
      },
      {
        "ctx": "We have discussed the theoretical and methodological contributions of this study.",
        "sent": "Lastly, the practical implications for policy are considered."
      }
    ],
    "acad": [
      "Finally, the limitations of the study are acknowledged and directions for future research are proposed.",
      "Lastly, it should be noted that these findings apply specifically to the adult working population."
    ],
    "daily": [
      "Finally, add the cheese on top and bake for 10 minutes.",
      "Lastly, I want to thank everyone who volunteered their time for this project."
    ],
    "pos_quiz": [
      {
        "sent": "Finally, the limitations of the study are acknowledged.",
        "correct": true
      },
      {
        "sent": "Lastly, the practical implications for policy are considered.",
        "correct": true
      },
      {
        "sent": "She finally arrived at the meeting after a long delay.",
        "correct": true
      },
      {
        "sent": "Finally the conclusions are presented in the last section.",
        "correct": false,
        "exp": "A comma is required after 'Finally' when used as a sequence marker at the start of a sentence."
      },
      {
        "sent": "Lastly I want to thank everyone who volunteered their time.",
        "correct": false,
        "exp": "A comma is required after 'Lastly' at the start of a sentence."
      }
    ],
    "alts": []
  },
  {
    "cat": "Sequence",
    "word": "Meanwhile",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to describe two things happening at the same time.",
    "pos": "Sentence-initial (followed by a comma)",
    "pos_detail": "'I'll set the table. Meanwhile, can you boil the pasta?'",
    "note": "'Meanwhile' emphasizes that two separate events are happening simultaneously. It creates a sense of parallel action.",
    "key_diff": "'While' shows simultaneity within one sentence. 'Meanwhile' connects two separate sentences.",
    "contexts": [
      {
        "ctx": "The intervention group received weekly therapy sessions.",
        "sent": "Meanwhile, the control group continued with treatment as usual."
      },
      {
        "ctx": "The research team was finalizing the analysis.",
        "sent": "Meanwhile, the policy landscape shifted dramatically with the change in government."
      }
    ],
    "acad": [
      "The primary analysis focused on behavioral outcomes; meanwhile, a separate team examined the neurological data.",
      "Inflation fell steadily throughout the third quarter; meanwhile, unemployment rose to a five-year high."
    ],
    "daily": [
      "I'll prepare the salad. Meanwhile, could you start the grill?",
      "She was revising her thesis. Meanwhile, her supervisor was reviewing the earlier chapters."
    ],
    "pos_quiz": [
      {
        "sent": "Meanwhile, the control group continued with treatment as usual.",
        "correct": true
      },
      {
        "sent": "I'll prepare the salad. Meanwhile, could you start the grill?",
        "correct": true
      },
      {
        "sent": "Meanwhile the policy landscape shifted dramatically.",
        "correct": false,
        "exp": "A comma is required after 'Meanwhile' at the start of a sentence."
      },
      {
        "sent": "The team finalized the analysis; meanwhile, government policy changed.",
        "correct": true
      },
      {
        "sent": "She was revising her thesis meanwhile her supervisor reviewed earlier chapters.",
        "correct": false,
        "exp": "'Meanwhile' cannot join two clauses without punctuation. Use a period or semicolon."
      }
    ],
    "alts": []
  },
  {
    "cat": "Example",
    "word": "For example",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce a specific example that illustrates or supports a general point.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'For example, some countries…' | Mid: 'Several countries, for example Denmark and Finland, have adopted…'",
    "note": "The most common example word — safe in any context. Can be abbreviated to 'e.g.' in academic writing (inside parentheses).",
    "key_diff": "'For example' vs 'For instance': They are interchangeable. 'For instance' sounds slightly more formal.",
    "contexts": [
      {
        "ctx": "Several cognitive biases can affect judgment under uncertainty.",
        "sent": "For example, anchoring bias leads people to rely too heavily on the first piece of information they receive."
      },
      {
        "ctx": "Environmental factors play an important role in health outcomes.",
        "sent": "For example, air pollution has been linked to increased rates of respiratory disease and cognitive decline."
      }
    ],
    "acad": [
      "Several structural factors contribute to poverty persistence; for example, inadequate access to credit markets limits investment in human capital.",
      "The scale has been validated in multiple contexts, for example in clinical samples and community populations."
    ],
    "daily": [
      "There are many ways to reduce stress. For example, regular exercise, mindfulness, and adequate sleep all help.",
      "I enjoy reading about many topics. For example, I recently finished a book on behavioral economics."
    ],
    "pos_quiz": [
      {
        "sent": "For example, anchoring bias leads people to rely on first impressions.",
        "correct": true
      },
      {
        "sent": "Several countries, for example Denmark and Finland, have adopted this policy.",
        "correct": true
      },
      {
        "sent": "For example air pollution has been linked to respiratory disease.",
        "correct": false,
        "exp": "A comma is required after 'For example' at the start of a sentence."
      },
      {
        "sent": "Cognitive biases affect judgment. For example, anchoring bias is very common.",
        "correct": true
      },
      {
        "sent": "The scale has been validated for example in clinical samples.",
        "correct": false,
        "exp": "When 'for example' is inserted mid-sentence, it must be enclosed by commas on both sides."
      }
    ],
    "alts": [
      "For instance"
    ]
  },
  {
    "cat": "Example",
    "word": "For instance",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to give a specific example — same meaning as 'for example'.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas)",
    "pos_detail": "'For instance, few studies have examined this population.'",
    "note": "Interchangeable with 'for example' in most contexts. Slightly more formal. Commonly used in academic writing.",
    "key_diff": "'For example' is more common in everyday writing. 'For instance' appears more in academic contexts. Both are always correct.",
    "contexts": [
      {
        "ctx": "Framing effects are pervasive in political communication.",
        "sent": "For instance, describing a policy as 'saving 200 lives' vs. 'letting 800 die' produces very different responses."
      },
      {
        "ctx": "Income inequality affects many dimensions of social life.",
        "sent": "For instance, it is associated with higher rates of crime, poorer health, and lower social mobility."
      }
    ],
    "acad": [
      "Several methodological weaknesses limit the conclusions; for instance, the control group received no intervention at all, making it impossible to rule out attention effects.",
      "Cross-lagged panel models, for instance, can help establish temporal precedence in observational data."
    ],
    "daily": [
      "Some people perform better under pressure. For instance, my colleague always delivers her best work right before a deadline.",
      "I find many historical periods fascinating. For instance, I've been reading a lot about the Cold War recently."
    ],
    "pos_quiz": [
      {
        "sent": "For instance, few studies have examined this population.",
        "correct": true
      },
      {
        "sent": "Cross-lagged models, for instance, can help establish temporal precedence.",
        "correct": true
      },
      {
        "sent": "For instance framing effects are pervasive in political communication.",
        "correct": false,
        "exp": "A comma is required after 'For instance' at the start of a sentence."
      },
      {
        "sent": "Income inequality affects many areas; for instance, it is linked to higher crime.",
        "correct": true
      },
      {
        "sent": "Several methods for instance panel models can address this problem.",
        "correct": false,
        "exp": "When 'for instance' is inserted mid-sentence, it must be enclosed by commas on both sides."
      }
    ],
    "alts": [
      "For example"
    ]
  },
  {
    "cat": "Example",
    "word": "Such as",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce examples — specifically a list of nouns or noun phrases.",
    "pos": "Mid-sentence ONLY — directly after the noun it explains",
    "pos_detail": "'Diseases such as diabetes and hypertension…' | Do NOT use at the start of a sentence.",
    "note": "'Such as' is a preposition — it MUST be followed by nouns (things), not full sentences. Never write 'such as + full sentence'.",
    "key_diff": "✓ 'Factors such as age, income, and education…' ✗ 'Such as, age is important.' — never at sentence start, never before a full clause.",
    "contexts": [
      {
        "ctx": "",
        "sent": "Behavioral interventions such as cognitive behavioral therapy and motivational interviewing have shown promise in reducing substance use."
      },
      {
        "ctx": "",
        "sent": "Structural barriers such as lack of transportation and limited childcare access reduce labor force participation among low-income mothers."
      }
    ],
    "acad": [
      "Personality traits such as conscientiousness and neuroticism are among the strongest predictors of academic performance.",
      "Countries such as Denmark, the Netherlands, and New Zealand consistently rank highly on wellbeing indices."
    ],
    "daily": [
      "I enjoy outdoor activities such as hiking, cycling, and swimming.",
      "She's been developing new skills such as data visualization and Python programming."
    ],
    "pos_quiz": [
      {
        "sent": "Diseases such as diabetes and hypertension are increasingly common.",
        "correct": true
      },
      {
        "sent": "Countries such as Denmark rank highly on wellbeing indices.",
        "correct": true
      },
      {
        "sent": "Such as cognitive therapy can help reduce anxiety symptoms.",
        "correct": false,
        "exp": "'Such as' cannot start a sentence. It must follow the noun it illustrates."
      },
      {
        "sent": "She developed skills such as data visualization and Python programming.",
        "correct": true
      },
      {
        "sent": "Barriers, such as lack of transport, reduce labor force participation.",
        "correct": true
      }
    ],
    "alts": []
  },
  {
    "cat": "Example",
    "word": "Namely",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to specify or name something exactly — to tell the reader precisely what you mean.",
    "pos": "Mid-sentence — directly after the noun or concept being specified",
    "pos_detail": "'Three predictors were included, namely age, income, and education level.'",
    "note": "'Namely' introduces a complete and exact list — not just examples. Use it when you are listing ALL items, not just some.",
    "key_diff": "'For example' suggests a sample from a larger group. 'Namely' lists ALL: 'Two conditions were tested, namely the control and the treatment.' — exactly two, no more.",
    "contexts": [
      {
        "ctx": "",
        "sent": "The study examined three dimensions of wellbeing, namely hedonic, eudaimonic, and social wellbeing."
      },
      {
        "ctx": "",
        "sent": "Two competing hypotheses have been proposed, namely the cognitive load hypothesis and the dual-process hypothesis."
      }
    ],
    "acad": [
      "The analysis controls for two key confounders, namely prior attainment and socioeconomic background.",
      "The literature identifies one major limitation, namely the reliance on cross-sectional designs that preclude causal inference."
    ],
    "daily": [
      "I have one simple request, namely that everyone arrives on time.",
      "There's one person who can solve this, namely the department head."
    ],
    "pos_quiz": [
      {
        "sent": "Three predictors were included, namely age, income, and education.",
        "correct": true
      },
      {
        "sent": "Two hypotheses were proposed, namely the cognitive load and dual-process hypotheses.",
        "correct": true
      },
      {
        "sent": "Namely, the study examined three dimensions of wellbeing.",
        "correct": false,
        "exp": "'Namely' cannot start a sentence. It follows the noun or concept it specifies."
      },
      {
        "sent": "The analysis controls for two confounders, namely prior attainment and SES.",
        "correct": true
      },
      {
        "sent": "One major limitation namely the reliance on cross-sectional designs was noted.",
        "correct": false,
        "exp": "'Namely' should be preceded by a comma, and the phrase it introduces set off: '…limitation, namely X, was noted.'"
      }
    ],
    "alts": []
  },
  {
    "cat": "Example",
    "word": "In particular",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to highlight one specific thing from a broader group as especially important or interesting.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'In particular, women over 50 showed the strongest effect.' | Mid: 'The youngest cohort, in particular, showed dramatic increases in screen time.'",
    "note": "'In particular' says: 'among everything I mentioned, THIS one deserves special attention.' Use it to zoom in on the most notable detail.",
    "key_diff": "'For example' introduces any example. 'In particular' highlights the MOST notable one — the one you most want the reader to remember.",
    "contexts": [
      {
        "ctx": "Several subgroups showed stronger effects than the overall sample.",
        "sent": "In particular, participants with no prior treatment history responded most strongly to the intervention."
      },
      {
        "ctx": "The findings have implications for several policy areas.",
        "sent": "Education policy, in particular, will need to adapt to the changing labor market demands."
      }
    ],
    "acad": [
      "In particular, the finding that effect size was moderated by baseline severity warrants further investigation.",
      "The results, in particular the unexpected reversal in the older age group, deserve closer attention."
    ],
    "daily": [
      "I love many types of cuisine. In particular, I find Korean and Mexican food incredibly exciting.",
      "The conference was excellent. In particular, the keynote on behavioral nudges was outstanding."
    ],
    "pos_quiz": [
      {
        "sent": "In particular, women over 50 showed the strongest effect.",
        "correct": true
      },
      {
        "sent": "The youngest cohort, in particular, showed dramatic increases in screen time.",
        "correct": true
      },
      {
        "sent": "In particular the finding about severity warrants further investigation.",
        "correct": false,
        "exp": "A comma is required after 'In particular' at the start of a sentence."
      },
      {
        "sent": "Education policy, in particular, will need to adapt to new demands.",
        "correct": true
      },
      {
        "sent": "The results were notable in particular for the oldest age group.",
        "correct": false,
        "exp": "When 'in particular' is inserted mid-sentence, it should be enclosed by commas."
      }
    ],
    "alts": [
      "Specifically"
    ]
  },
  {
    "cat": "Emphasis",
    "word": "Indeed",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to strongly confirm or agree with what was just said, or to intensify a statement.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas)",
    "pos_detail": "'Indeed, this is the largest study to date.' | 'The effect was, indeed, surprisingly large.'",
    "note": "'Indeed' confirms that something is true — often used to agree with a previous point or add extra certainty.",
    "key_diff": "'In fact' corrects or surprises. 'Indeed' confirms and strengthens: 'Some predicted a positive result. Indeed, the results were strongly positive.'",
    "contexts": [
      {
        "ctx": "Previous studies hinted at a possible dose-response relationship.",
        "sent": "Indeed, the current data confirm that higher doses produce proportionally larger effects."
      },
      {
        "ctx": "Critics have long argued that the policy would have unintended consequences.",
        "sent": "Indeed, longitudinal data now show exactly the distributional effects that were predicted."
      }
    ],
    "acad": [
      "Indeed, the effect sizes reported here are among the largest observed in this literature.",
      "The model was, indeed, able to predict outcomes with greater accuracy than any prior benchmark."
    ],
    "daily": [
      "This is indeed the most challenging project I've ever worked on.",
      "She said it would be difficult. It was, indeed, far harder than any of us expected."
    ],
    "pos_quiz": [
      {
        "sent": "Indeed, this is the largest study to date on this topic.",
        "correct": true
      },
      {
        "sent": "The effect was, indeed, surprisingly large.",
        "correct": true
      },
      {
        "sent": "Indeed the data confirm a clear dose-response relationship.",
        "correct": false,
        "exp": "A comma is required after 'Indeed' at the start of a sentence."
      },
      {
        "sent": "This is indeed the most challenging project I've worked on.",
        "correct": true
      },
      {
        "sent": "Critics predicted consequences. Indeed, the data now confirm them.",
        "correct": true
      }
    ],
    "alts": [
      "In fact"
    ]
  },
  {
    "cat": "Emphasis",
    "word": "In fact",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce information that is surprising, corrective, or stronger than what was expected.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas)",
    "pos_detail": "'In fact, the opposite pattern was observed.' | 'The results were, in fact, quite surprising.'",
    "note": "'In fact' often corrects a common assumption or adds a surprising detail. It says: 'the reality is different from — or stronger than — what you expected.'",
    "key_diff": "'Indeed' confirms an expectation. 'In fact' often overturns one: 'I thought it would be straightforward. In fact, it was extraordinarily complex.'",
    "contexts": [
      {
        "ctx": "Many assumed the policy would reduce inequality.",
        "sent": "In fact, it widened the gap between the highest and lowest income groups."
      },
      {
        "ctx": "The early results looked promising.",
        "sent": "Closer inspection, in fact, revealed a serious confound that invalidated the main comparison."
      }
    ],
    "acad": [
      "In fact, the data suggest the opposite direction of causality from what the authors originally proposed.",
      "The confidence interval is remarkably narrow; in fact, it is the tightest reported in any study of this type."
    ],
    "daily": [
      "I thought the conference would be boring. In fact, it was one of the best I've attended.",
      "He doesn't just like statistics — in fact, he reads methods papers for fun."
    ],
    "pos_quiz": [
      {
        "sent": "In fact, the opposite pattern was observed in the data.",
        "correct": true
      },
      {
        "sent": "The results were, in fact, quite surprising to all researchers.",
        "correct": true
      },
      {
        "sent": "In fact the data suggest the opposite direction of causality.",
        "correct": false,
        "exp": "A comma is required after 'In fact' at the start of a sentence."
      },
      {
        "sent": "He doesn't just like statistics — in fact, he reads methods papers for fun.",
        "correct": true
      },
      {
        "sent": "The confidence interval is narrow in fact it is the tightest reported.",
        "correct": false,
        "exp": "'In fact' needs punctuation before it when connecting two clauses."
      }
    ],
    "alts": [
      "Indeed"
    ]
  },
  {
    "cat": "Emphasis",
    "word": "Importantly",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to signal that the next piece of information is particularly significant or key to the argument.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Importantly, this effect replicates.' | Mid: 'The effect was, importantly, consistent across all subgroups.'",
    "note": "Used to guide the reader's attention to the most critical finding or point. It says: 'pay attention to this — it matters more than the other details.'",
    "key_diff": "'Importantly' is an adverb: ✗ 'Important, the results showed…' ✓ 'Importantly, the results showed…'",
    "contexts": [
      {
        "ctx": "The treatment worked well in the primary sample.",
        "sent": "Importantly, the effects replicated in two independent validation samples."
      },
      {
        "ctx": "The new methodology has several advantages.",
        "sent": "The estimates were, importantly, robust to a range of alternative model specifications."
      }
    ],
    "acad": [
      "Importantly, the findings hold after controlling for publication bias using the trim-and-fill method.",
      "The causal mechanism is, importantly, consistent with both the social learning and rational choice frameworks."
    ],
    "daily": [
      "Importantly, the side effects were mild and short-lived in all participants.",
      "Importantly, this policy applies to all employees, not just those hired after 2020."
    ],
    "pos_quiz": [
      {
        "sent": "Importantly, the effects replicated in two independent samples.",
        "correct": true
      },
      {
        "sent": "The estimates were, importantly, robust to alternative specifications.",
        "correct": true
      },
      {
        "sent": "Important, the results showed remarkable consistency across groups.",
        "correct": false,
        "exp": "The correct form is the adverb 'Importantly', not the adjective 'Important'."
      },
      {
        "sent": "Importantly the findings hold after controlling for publication bias.",
        "correct": false,
        "exp": "A comma is required after 'Importantly' at the start of a sentence."
      },
      {
        "sent": "The mechanism is, importantly, consistent with both frameworks.",
        "correct": true
      }
    ],
    "alts": [
      "Notably"
    ]
  },
  {
    "cat": "Emphasis",
    "word": "Notably",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to draw attention to something that is especially worth noticing.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Notably, no prior study has examined…' | Mid: 'One subgroup, notably, showed the reverse pattern.'",
    "note": "'Notably' is more objective than 'importantly'. It says: 'this fact is interesting / unexpected / worth highlighting'.",
    "key_diff": "'Importantly' = this fact is central to the argument. 'Notably' = this fact is interesting or unexpected, even if secondary.",
    "contexts": [
      {
        "ctx": "The results were largely consistent with prior research.",
        "sent": "Notably, the effect was strongest among the youngest age cohort."
      },
      {
        "ctx": "Most variables showed the expected pattern.",
        "sent": "One predictor, notably, failed to reach significance in any of the specifications."
      }
    ],
    "acad": [
      "Notably, the gender gap in earnings was largest in occupations with the least standardized compensation practices.",
      "No previous study has examined this interaction; notably, the current design is also the first to use a nationally representative sample."
    ],
    "daily": [
      "Notably, she completed the entire program without missing a single session.",
      "The results were mostly predictable — notably, one country's response completely defied all models."
    ],
    "pos_quiz": [
      {
        "sent": "Notably, the effect was strongest among the youngest age cohort.",
        "correct": true
      },
      {
        "sent": "One predictor, notably, failed to reach significance in any model.",
        "correct": true
      },
      {
        "sent": "Notably no prior study has examined this specific interaction.",
        "correct": false,
        "exp": "A comma is required after 'Notably' at the start of a sentence."
      },
      {
        "sent": "The gender gap was largest in the least standardized occupations. Notably, this held across countries.",
        "correct": true
      },
      {
        "sent": "The results were mostly predictable notably one country defied all models.",
        "correct": false,
        "exp": "'Notably' needs punctuation before it when connecting two clauses."
      }
    ],
    "alts": [
      "Importantly"
    ]
  },
  {
    "cat": "Emphasis",
    "word": "Above all",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to highlight the single most important point — usually the final and most essential one.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Above all, transparency is essential.' | Mid (in a list): 'The study prioritized rigor, efficiency, and, above all, ethical conduct.'",
    "note": "Best used after listing several points to signal: 'of everything I mentioned, this one matters most'. Provides a strong final emphasis.",
    "key_diff": "'Most importantly' and 'above all' are similar. 'Above all' has a slightly stronger, more definitive tone — like a final verdict.",
    "contexts": [
      {
        "ctx": "Researchers must consider several ethical obligations.",
        "sent": "Above all, they must ensure that participation is genuinely voluntary and informed."
      },
      {
        "ctx": "Effective leadership requires many qualities.",
        "sent": "It requires intelligence, empathy, and, above all, the ability to inspire trust."
      }
    ],
    "acad": [
      "The intervention was low-cost, scalable, and, above all, acceptable to the target population.",
      "Above all, future research must address the near-total absence of longitudinal evidence in this field."
    ],
    "daily": [
      "You can be flexible on the timeline and the budget. Above all, don't compromise on quality.",
      "Above all, be honest with yourself about what you actually want."
    ],
    "pos_quiz": [
      {
        "sent": "Above all, researchers must ensure that participation is voluntary.",
        "correct": true
      },
      {
        "sent": "The study prioritized rigor, efficiency, and, above all, ethical conduct.",
        "correct": true
      },
      {
        "sent": "Above all ensure that participation is genuinely voluntary and informed.",
        "correct": false,
        "exp": "A comma is required after 'Above all' at the start of a sentence."
      },
      {
        "sent": "Above all, don't compromise on data quality.",
        "correct": true
      },
      {
        "sent": "The intervention was scalable and above all acceptable to the population.",
        "correct": false,
        "exp": "'Above all' should be set off by commas: '…and, above all, acceptable…'"
      }
    ],
    "alts": []
  },
  {
    "cat": "Conclusion",
    "word": "In conclusion",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to signal the beginning of the final summary or closing statement.",
    "pos": "Sentence-initial (followed by a comma)",
    "pos_detail": "Almost exclusively sentence-initial, opening the final paragraph: 'In conclusion, this study provides…' — not used mid-sentence in academic writing.",
    "note": "A clear signal to the reader that the argument is ending. Use it to open the final paragraph in an essay or conclusion section of a paper.",
    "key_diff": "'In conclusion' ends a piece of writing. 'In summary' wraps up a section. Save 'In conclusion' for the very end.",
    "contexts": [
      {
        "ctx": "",
        "sent": "In conclusion, this study provides robust evidence that mindfulness-based interventions can reduce perceived stress in working adults."
      },
      {
        "ctx": "",
        "sent": "In conclusion, while the findings are promising, larger randomized trials are needed before the intervention can be recommended at scale."
      }
    ],
    "acad": [
      "In conclusion, the evidence reviewed here consistently supports a positive association between social cohesion and population health.",
      "In conclusion, these findings challenge the dominant theoretical framework and point toward the need for a more integrative model."
    ],
    "daily": [
      "In conclusion, I think we should go with the second proposal — it's more realistic and better costed.",
      "In conclusion, the trip was exhausting but absolutely worth every minute."
    ],
    "pos_quiz": [
      {
        "sent": "In conclusion, this study provides robust evidence for the intervention.",
        "correct": true
      },
      {
        "sent": "In conclusion, while the findings are promising, larger trials are needed.",
        "correct": true
      },
      {
        "sent": "In conclusion the evidence supports a positive association with health.",
        "correct": false,
        "exp": "A comma is required after 'In conclusion' at the start of a sentence."
      },
      {
        "sent": "The study, in conclusion, supports the original hypothesis.",
        "correct": false,
        "exp": "'In conclusion' is almost exclusively used at sentence-initial position."
      },
      {
        "sent": "This study provides robust evidence. In conclusion, policy changes are warranted.",
        "correct": true
      }
    ],
    "alts": [
      "In summary",
      "To sum up",
      "All in all"
    ]
  },
  {
    "cat": "Conclusion",
    "word": "In summary",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to briefly restate the main points that were just covered.",
    "pos": "Sentence-initial (most common) OR mid-sentence (between commas, less common)",
    "pos_detail": "Start: 'In summary, three themes emerged.' | Mid (rare but valid): 'The findings, in summary, support the model.'",
    "note": "More neutral and flexible than 'in conclusion'. Can be used at the end of any section — not just the very end of a paper.",
    "key_diff": "'In summary' restates what was said. 'In conclusion' draws a final judgment. 'In summary' can appear mid-paper; 'in conclusion' is reserved for the end.",
    "contexts": [
      {
        "ctx": "",
        "sent": "In summary, three factors consistently predict political participation: education, civic engagement, and trust in institutions."
      },
      {
        "ctx": "",
        "sent": "In summary, the experimental results support the first hypothesis but not the second."
      }
    ],
    "acad": [
      "In summary, the meta-analytic evidence points to a small but reliable effect of mindset interventions on academic achievement.",
      "The cross-national patterns, in summary, suggest that institutional context moderates the relationship between inequality and health."
    ],
    "daily": [
      "In summary, we need more time, a bigger budget, and better communication between teams.",
      "In summary, the semester was challenging but rewarding."
    ],
    "pos_quiz": [
      {
        "sent": "In summary, three factors consistently predict political participation.",
        "correct": true
      },
      {
        "sent": "The findings, in summary, support the first hypothesis but not the second.",
        "correct": true
      },
      {
        "sent": "In summary the meta-analytic evidence points to a small but reliable effect.",
        "correct": false,
        "exp": "A comma is required after 'In summary' at the start of a sentence."
      },
      {
        "sent": "In summary, we need more time, a bigger budget, and better communication.",
        "correct": true
      },
      {
        "sent": "The patterns in summary suggest that institutional context matters greatly.",
        "correct": false,
        "exp": "When 'in summary' is inserted mid-sentence, it must be enclosed by commas."
      }
    ],
    "alts": [
      "In conclusion",
      "To sum up",
      "Overall"
    ]
  },
  {
    "cat": "Conclusion",
    "word": "Overall",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to give a general evaluation or judgment that covers everything discussed.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between commas) OR sentence-final (no comma)",
    "pos_detail": "Start: 'Overall, the findings support the model.' | Mid: 'The results, overall, support the hypothesis.' | Sentence-final: 'The model performed well overall.' (no comma at end)",
    "note": "'Overall' is the lightest and most flexible conclusion word. Works in speech, casual writing, and formal academic writing.",
    "key_diff": "'Overall' can go at the END of a sentence — unlike most other linking words: 'The conference was well organized overall.' This is perfectly natural.",
    "contexts": [
      {
        "ctx": "There were some methodological limitations and a few unexpected findings.",
        "sent": "Overall, however, the evidence strongly supports the effectiveness of the intervention."
      },
      {
        "ctx": "Some indicators improved while others showed mixed results.",
        "sent": "The policy was, overall, judged to have had a modest positive effect on wellbeing."
      }
    ],
    "acad": [
      "Overall, the findings are consistent with a social-ecological model of behavior change.",
      "The model performed well overall, though predictive accuracy was lower for the youngest age group."
    ],
    "daily": [
      "Overall, the restaurant was excellent and I would definitely recommend it.",
      "It was a tough year, but overall, I learned a lot and I'm glad I did it."
    ],
    "pos_quiz": [
      {
        "sent": "Overall, the findings are consistent with the proposed model.",
        "correct": true
      },
      {
        "sent": "The results, overall, support the hypothesis.",
        "correct": true
      },
      {
        "sent": "The model performed well overall.",
        "correct": true
      },
      {
        "sent": "Overall the conference was well organized and highly informative.",
        "correct": false,
        "exp": "A comma is required after 'Overall' at the start of a sentence."
      },
      {
        "sent": "The findings support the model, overall.",
        "correct": false,
        "exp": "No comma before sentence-final 'overall'. Write: '…the model overall.'"
      }
    ],
    "alts": [
      "All in all",
      "In summary"
    ]
  },
  {
    "cat": "Conclusion",
    "word": "To sum up",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to introduce a brief final summary — slightly more conversational than 'in conclusion'.",
    "pos": "Sentence-initial (most common)",
    "pos_detail": "Almost exclusively sentence-initial: 'To sum up, the evidence points to X.' Occasionally used mid-presentation in speech to recap a section.",
    "note": "Very natural in presentations and speeches. Also works in written essays. Signals a short, confident wrap-up.",
    "key_diff": "'To sum up' is more conversational than 'in conclusion'. Use 'to sum up' for a direct, confident close; 'in conclusion' for formal academic writing.",
    "contexts": [
      {
        "ctx": "",
        "sent": "To sum up, the available evidence suggests that early childhood interventions yield the highest returns for long-term wellbeing."
      },
      {
        "ctx": "",
        "sent": "To sum up, three key factors drive this pattern: structural inequality, limited institutional capacity, and weak civic engagement."
      }
    ],
    "acad": [
      "To sum up, the present study contributes to the literature by providing the first longitudinal test of this hypothesis in a non-Western context.",
      "To sum up, the findings have clear implications for how policymakers should prioritize investments in preventive healthcare."
    ],
    "daily": [
      "To sum up, you need to spend less, save more, and start investing earlier than you think.",
      "To sum up, it was a great semester — I learned more than I expected and met some remarkable people."
    ],
    "pos_quiz": [
      {
        "sent": "To sum up, the evidence points to early childhood interventions.",
        "correct": true
      },
      {
        "sent": "To sum up, three key factors drive this pattern.",
        "correct": true
      },
      {
        "sent": "To sum up the evidence points to multiple contributing factors.",
        "correct": false,
        "exp": "A comma is required after 'To sum up'. Without it, the phrase reads as 'to summarize the evidence'."
      },
      {
        "sent": "The semester was challenging. To sum up, I learned more than expected.",
        "correct": true
      },
      {
        "sent": "The results, to sum up, are consistent with prior published work.",
        "correct": false,
        "exp": "'To sum up' is almost exclusively used at sentence-initial position."
      }
    ],
    "alts": [
      "In summary",
      "All in all"
    ]
  },
  {
    "cat": "Conclusion",
    "word": "Taken together",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to combine multiple findings or pieces of evidence into a single overall conclusion.",
    "pos": "Sentence-initial (followed by a comma)",
    "pos_detail": "Almost exclusively sentence-initial, used to synthesize several prior results: 'Taken together, these findings suggest…'",
    "note": "Almost exclusively used in academic writing. It signals: 'I have presented several findings — here is what they all mean when viewed as a whole.'",
    "key_diff": "'Taken together' is unique to academic writing. Use 'overall' or 'to sum up' in everyday language instead.",
    "contexts": [
      {
        "ctx": "Study 1 found positive effects on wellbeing. Study 2 replicated the results in a different population. Study 3 identified the likely mechanism.",
        "sent": "Taken together, these findings provide strong and converging evidence for the effectiveness of the intervention."
      },
      {
        "ctx": "The qualitative themes pointed to a lack of trust. The quantitative results showed low uptake. The implementation data revealed key barriers.",
        "sent": "Taken together, these strands of evidence paint a coherent picture of why the program underperformed."
      }
    ],
    "acad": [
      "Taken together, the experimental and observational evidence supports a causal interpretation of the association between air pollution and cognitive decline.",
      "Taken together, these analyses suggest that the effect is robust to a wide range of modeling assumptions."
    ],
    "daily": [
      "(This phrase is mainly used in academic writing — not common in everyday speech.)",
      "(Use 'overall' or 'all in all' in daily conversation instead.)"
    ],
    "pos_quiz": [
      {
        "sent": "Taken together, these findings provide strong converging evidence.",
        "correct": true
      },
      {
        "sent": "Taken together, these analyses suggest the effect is robust.",
        "correct": true
      },
      {
        "sent": "Taken together these findings suggest a causal relationship.",
        "correct": false,
        "exp": "A comma is required after 'Taken together' at the start of a sentence."
      },
      {
        "sent": "These findings, taken together, paint a coherent picture of the phenomenon.",
        "correct": true
      },
      {
        "sent": "The evidence provides support taken together for the hypothesis.",
        "correct": false,
        "exp": "'Taken together' should either start the sentence or be placed directly after the noun it modifies, enclosed by commas."
      }
    ],
    "alts": [
      "Overall"
    ]
  },
  {
    "cat": "Addition",
    "word": "Similarly / Likewise",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to show that two things are alike or follow the same pattern.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Similarly, the second group showed improvement.' | Mid: 'The second group, likewise, showed improvement.' | 'Likewise' can also go mid-sentence without commas: 'Group B likewise improved.'",
    "note": "'Similarly' and 'likewise' connect two parallel ideas. Use them when two things share the same quality or pattern — not when adding a new, different point.",
    "key_diff": "'Similarly/Likewise' = same pattern. 'Furthermore/Moreover' = new, additional point. 'Similarly, Group B improved' means Group B did the same as Group A.",
    "contexts": [
      {
        "ctx": "Students who participated in tutoring showed significant grade improvements.",
        "sent": "Similarly, those who attended study groups reported higher confidence."
      },
      {
        "ctx": "The first experiment found a positive correlation between exercise and mood.",
        "sent": "Likewise, the second experiment replicated this finding with a larger sample."
      },
      {
        "ctx": "Urban areas experienced a sharp increase in housing prices.",
        "sent": "Similarly, suburban markets saw rising demand from remote workers."
      }
    ],
    "acad": [
      "Similarly, cross-cultural studies have confirmed the robustness of this finding across diverse populations.",
      "Economic growth in East Asia accelerated during this period; likewise, investment in education increased substantially."
    ],
    "daily": [
      "My sister enjoys hiking and swimming. Similarly, I love outdoor activities.",
      "He's always punctual. Likewise, his colleagues respect deadlines."
    ],
    "pos_quiz": [
      {
        "sent": "Similarly, the control group showed no significant change.",
        "correct": true
      },
      {
        "sent": "The results, likewise, confirmed the original hypothesis.",
        "correct": true
      },
      {
        "sent": "Similarly the second study replicated the finding.",
        "correct": false,
        "exp": "A comma is required after 'Similarly' at the start of a sentence."
      },
      {
        "sent": "She enjoys reading likewise he prefers writing.",
        "correct": false,
        "exp": "'Likewise' cannot join two clauses without punctuation. Use a period or semicolon."
      },
      {
        "sent": "The pattern was similarly observed in the replication study.",
        "correct": true
      }
    ],
    "alts": [
      "Furthermore",
      "Moreover"
    ]
  },
  {
    "cat": "Contrast",
    "word": "Despite / In spite of",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to show that something happened or is true even though there was something that might prevent it.",
    "pos": "Sentence-initial OR mid-sentence — ALWAYS followed by a noun phrase or '-ing' form, never a full clause",
    "pos_detail": "✓ 'Despite the rain, we went out.' | ✓ 'Despite being tired, she continued.' | ✗ 'Despite it rained, we went out.' (wrong — use 'although' for full clauses)",
    "note": "'Despite' and 'in spite of' are prepositions, not conjunctions. They must be followed by a noun or -ing form. To introduce a full clause, use 'although' or 'even though' instead.",
    "key_diff": "'Despite' + noun: 'Despite the delay, we arrived.' | 'Although' + clause: 'Although we were delayed, we arrived.' — Never write 'despite that it rained' or 'despite of'.",
    "contexts": [
      {
        "ctx": "The study had several methodological limitations.",
        "sent": "Despite these limitations, the findings provide valuable preliminary evidence."
      },
      {
        "ctx": "Participation rates were lower than expected.",
        "sent": "In spite of the low response rate, the sample remained representative of the target population."
      },
      {
        "ctx": "Funding was cut midway through the project.",
        "sent": "Despite the reduced budget, the team delivered all planned outputs on time."
      }
    ],
    "acad": [
      "Despite controlling for multiple confounders, the association between poverty and health remained significant.",
      "In spite of considerable theoretical advances, empirical evidence in this area remains limited."
    ],
    "daily": [
      "Despite the heavy traffic, we arrived on time.",
      "In spite of his busy schedule, he always finds time to exercise."
    ],
    "pos_quiz": [
      {
        "sent": "Despite the rain, we went ahead with the outdoor event.",
        "correct": true
      },
      {
        "sent": "In spite of the challenges, the team completed the project on time.",
        "correct": true
      },
      {
        "sent": "Despite it was raining heavily, we went outside.",
        "correct": false,
        "exp": "'Despite' must be followed by a noun phrase, not a clause. Use 'Although it was raining' instead."
      },
      {
        "sent": "She performed well despite having little preparation time.",
        "correct": true
      },
      {
        "sent": "Despite of the warnings, they proceeded with the plan.",
        "correct": false,
        "exp": "'Despite' is never followed by 'of'. Use 'despite the warnings' or 'in spite of the warnings'."
      }
    ],
    "alts": []
  },
  {
    "cat": "Contrast",
    "word": "Whereas",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to contrast two facts or ideas by showing how they are different.",
    "pos": "Sentence-initial (with comma after the clause) OR mid-sentence (after main clause, with comma before)",
    "pos_detail": "Start: 'Whereas Study A found benefits, Study B found none.' | Mid: 'Men preferred option A, whereas women preferred option B.'",
    "note": "'Whereas' is stronger and more formal than 'while' for showing contrast. It always signals contrast — unlike 'while', which can also mean 'at the same time'.",
    "key_diff": "'While' can mean time or contrast. 'Whereas' always means contrast — it removes the ambiguity: 'Whereas men scored higher, women showed more consistency.'",
    "contexts": [
      {
        "ctx": "",
        "sent": "Whereas the experimental group improved significantly, the control group showed no change."
      },
      {
        "ctx": "",
        "sent": "Urban residents reported higher stress levels, whereas rural residents reported greater life satisfaction."
      },
      {
        "ctx": "",
        "sent": "Whereas classical methods assume equal measurement error, modern approaches allow it to vary."
      }
    ],
    "acad": [
      "Whereas classical test theory treats measurement error as uniform, item response theory allows error to vary across the ability continuum.",
      "The qualitative data suggested widespread dissatisfaction, whereas the survey results painted a more nuanced picture."
    ],
    "daily": [
      "I prefer coffee in the morning, whereas my partner always has tea.",
      "She's very organized, whereas her brother is completely spontaneous."
    ],
    "pos_quiz": [
      {
        "sent": "Whereas the first study found positive results, the second did not.",
        "correct": true
      },
      {
        "sent": "Men preferred option A, whereas women preferred option B.",
        "correct": true
      },
      {
        "sent": "Whereas the sample was small the results were significant.",
        "correct": false,
        "exp": "A comma is needed after the 'whereas' clause: 'Whereas X, Y.'"
      },
      {
        "sent": "He enjoys cooking, whereas she prefers eating out.",
        "correct": true
      },
      {
        "sent": "Whereas, the evidence is strong, the sample is too small.",
        "correct": false,
        "exp": "Do not put a comma directly after 'Whereas'. The comma comes after the full clause: 'Whereas the evidence is strong, …'"
      }
    ],
    "alts": [
      "While"
    ]
  },
  {
    "cat": "Contrast",
    "word": "Conversely",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to introduce a statement that is the opposite of what was just said.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Conversely, lower income was associated with poorer health.' | Mid: 'Higher education, conversely, was linked to better outcomes.'",
    "note": "'Conversely' signals a direct reversal or opposite — not just a difference. Use it when the second statement is the mirror image of the first.",
    "key_diff": "'However' = general contrast. 'Conversely' = opposite direction: 'Exercise improves mood. Conversely, inactivity worsens it.' — the relationship is reversed.",
    "contexts": [
      {
        "ctx": "Increased investment in education was associated with higher economic growth.",
        "sent": "Conversely, countries that reduced education spending saw declining growth rates."
      },
      {
        "ctx": "Positive reinforcement increased desired behavior in the treatment group.",
        "sent": "Conversely, the absence of reinforcement led to a gradual decline in performance."
      }
    ],
    "acad": [
      "Higher socioeconomic status predicted better health outcomes; conversely, poverty was consistently associated with chronic disease.",
      "Conversely, when the intervention was removed, participants reverted to baseline behavior within three weeks."
    ],
    "daily": [
      "If you eat well, you'll feel better. Conversely, a poor diet will drain your energy.",
      "He thrives under pressure. Conversely, his colleague performs best when given plenty of time."
    ],
    "pos_quiz": [
      {
        "sent": "Conversely, lower income was associated with poorer health outcomes.",
        "correct": true
      },
      {
        "sent": "Higher education, conversely, was linked to better employment prospects.",
        "correct": true
      },
      {
        "sent": "Conversely the results showed the opposite pattern.",
        "correct": false,
        "exp": "A comma is required after 'Conversely' at the start of a sentence."
      },
      {
        "sent": "Exercise improves mood conversely inactivity worsens it.",
        "correct": false,
        "exp": "'Conversely' cannot join two clauses without punctuation. Use a period or semicolon."
      },
      {
        "sent": "Poverty was, conversely, the strongest predictor of poor health.",
        "correct": true
      }
    ],
    "alts": [
      "In contrast"
    ]
  },
  {
    "cat": "Contrast",
    "word": "On the contrary",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to strongly deny or correct what was just said and introduce the opposite truth.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas, less common)",
    "pos_detail": "Start: 'On the contrary, the data show the opposite.' — almost exclusively sentence-initial, used to correct a previous claim.",
    "note": "'On the contrary' corrects a false assumption: 'You might think X. On the contrary, Y is true.' It is NOT the same as 'on the other hand', which weighs two sides equally.",
    "key_diff": "'On the other hand' = two valid perspectives being weighed. 'On the contrary' = the previous statement is WRONG: 'The policy didn't fail. On the contrary, it exceeded all targets.'",
    "contexts": [
      {
        "ctx": "Some have argued that the intervention was ineffective.",
        "sent": "On the contrary, the data show a statistically significant improvement across all subgroups."
      },
      {
        "ctx": "It was assumed that remote work would reduce productivity.",
        "sent": "On the contrary, output increased by 15% during the remote period."
      }
    ],
    "acad": [
      "The reduction in funding did not weaken the program. On the contrary, it forced greater efficiency and produced stronger outcomes.",
      "On the contrary, the evidence suggests that the relationship is bidirectional, not unidirectional as previously assumed."
    ],
    "daily": [
      "I'm not upset about the change. On the contrary, I think it's a great improvement.",
      "The movie wasn't boring at all. On the contrary, it was one of the most exciting films I've seen."
    ],
    "pos_quiz": [
      {
        "sent": "On the contrary, the data show a significant improvement.",
        "correct": true
      },
      {
        "sent": "The policy didn't fail. On the contrary, it exceeded expectations.",
        "correct": true
      },
      {
        "sent": "On the contrary the evidence suggests the opposite.",
        "correct": false,
        "exp": "A comma is required after 'On the contrary' at the start of a sentence."
      },
      {
        "sent": "She is, on the contrary, the most qualified candidate in the pool.",
        "correct": true
      },
      {
        "sent": "He was tired on the contrary he kept working until midnight.",
        "correct": false,
        "exp": "'On the contrary' needs punctuation before it when connecting two clauses."
      }
    ],
    "alts": [
      "In fact"
    ]
  },
  {
    "cat": "Cause/Effect",
    "word": "Accordingly",
    "reg": [
      "Academic"
    ],
    "meaning": "Used to introduce an action or decision that is a logical response to what was just described.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'Accordingly, the protocol was revised.' | Mid: 'The protocol was, accordingly, revised.'",
    "note": "'Accordingly' suggests that an action was taken in response to a situation — it implies a deliberate decision rather than just a natural consequence.",
    "key_diff": "'Therefore' = logical conclusion from evidence. 'Accordingly' = action taken in response to circumstances: 'The data were non-normal. Accordingly, non-parametric tests were used.'",
    "contexts": [
      {
        "ctx": "The initial analysis revealed significant violations of normality assumptions.",
        "sent": "Accordingly, non-parametric alternatives were used for all subsequent tests."
      },
      {
        "ctx": "Feedback from participants indicated that the survey was too long.",
        "sent": "The research team accordingly shortened the instrument from 60 to 35 items."
      },
      {
        "ctx": "The ethics committee raised concerns about the consent procedure.",
        "sent": "Accordingly, the consent form was revised and resubmitted for approval."
      }
    ],
    "acad": [
      "The effect sizes were small and the confidence intervals wide; accordingly, the findings should be interpreted with caution.",
      "Accordingly, the theoretical framework was revised to account for the newly identified moderating variables."
    ],
    "daily": [
      "The weather forecast predicted heavy rain. Accordingly, we moved the event indoors.",
      "She received excellent feedback on her work. Accordingly, she was promoted to team lead."
    ],
    "pos_quiz": [
      {
        "sent": "Accordingly, the protocol was revised to address these concerns.",
        "correct": true
      },
      {
        "sent": "The protocol was, accordingly, revised before the next phase.",
        "correct": true
      },
      {
        "sent": "Accordingly the research team changed their approach.",
        "correct": false,
        "exp": "A comma is required after 'Accordingly' at the start of a sentence."
      },
      {
        "sent": "The data were non-normal accordingly non-parametric tests were used.",
        "correct": false,
        "exp": "'Accordingly' cannot join two clauses without punctuation. Use a period or semicolon."
      },
      {
        "sent": "The findings were inconclusive; accordingly, further research was recommended.",
        "correct": true
      }
    ],
    "alts": [
      "Therefore",
      "Consequently"
    ]
  },
  {
    "cat": "Emphasis",
    "word": "In other words",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to explain or rephrase something in a simpler or clearer way.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'In other words, the model failed to converge.' | Mid: 'The model, in other words, could not produce stable estimates.'",
    "note": "'In other words' signals that you are about to restate the same idea in different (usually simpler) language. It helps readers understand a complex point.",
    "key_diff": "'In other words' = same idea, different phrasing (for clarity). 'In fact' = new, surprising information (for emphasis or correction).",
    "contexts": [
      {
        "ctx": "The confidence interval included zero and the p-value exceeded .05.",
        "sent": "In other words, the effect was not statistically significant."
      },
      {
        "ctx": "The model explained less than 5% of the variance in the outcome.",
        "sent": "In other words, most of the variation in scores remained unexplained."
      },
      {
        "ctx": "Participants in the control condition received no treatment of any kind.",
        "sent": "In other words, any improvement in the control group would reflect natural recovery."
      }
    ],
    "acad": [
      "The interaction term was non-significant; in other words, the effect did not vary across subgroups.",
      "In other words, the observed pattern is consistent with a ceiling effect rather than a true treatment difference."
    ],
    "daily": [
      "You need to submit the form by Friday. In other words, you have three days left.",
      "He's not available until next month. In other words, we'll have to manage without him."
    ],
    "pos_quiz": [
      {
        "sent": "In other words, the effect was not statistically significant.",
        "correct": true
      },
      {
        "sent": "The model, in other words, could not produce stable estimates.",
        "correct": true
      },
      {
        "sent": "In other words the results were inconclusive.",
        "correct": false,
        "exp": "A comma is required after 'In other words' at the start of a sentence."
      },
      {
        "sent": "The interaction was non-significant; in other words, the effect did not vary.",
        "correct": true
      },
      {
        "sent": "The data showed no pattern in other words there was no effect.",
        "correct": false,
        "exp": "'In other words' needs punctuation before it when connecting two clauses."
      }
    ],
    "alts": []
  },
  {
    "cat": "Example",
    "word": "Specifically",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to give precise details or narrow the focus to one particular aspect.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas or before a detail)",
    "pos_detail": "Start: 'Specifically, the study focused on adolescents aged 13–17.' | Mid: 'The study focused, specifically, on urban areas.' | Before detail: '…three variables, specifically age, income, and education.'",
    "note": "'Specifically' narrows the focus from general to particular. It says: 'let me give you the exact detail.' It is more precise than 'in particular', which highlights something noteworthy.",
    "key_diff": "'In particular' = this one is especially noteworthy. 'Specifically' = here is the exact detail: 'Specifically, items 3, 7, and 12 were removed from the scale.'",
    "contexts": [
      {
        "ctx": "The intervention targeted several health behaviors.",
        "sent": "Specifically, it addressed smoking cessation, dietary habits, and physical activity levels."
      },
      {
        "ctx": "The policy had a wide-ranging impact on the healthcare system.",
        "sent": "Specifically, it reduced wait times by 40% and improved patient satisfaction scores."
      },
      {
        "ctx": "The analysis controlled for several demographic variables.",
        "sent": "Specifically, age, gender, ethnicity, and household income were included as covariates."
      }
    ],
    "acad": [
      "Specifically, the study examined whether the treatment effect was moderated by baseline severity.",
      "The analysis focused on three outcome variables, specifically academic achievement, attendance, and disciplinary incidents."
    ],
    "daily": [
      "I need some things from the store — specifically, milk, bread, and eggs.",
      "She's interested in science, specifically marine biology and ocean conservation."
    ],
    "pos_quiz": [
      {
        "sent": "Specifically, the study focused on adolescents aged 13 to 17.",
        "correct": true
      },
      {
        "sent": "The analysis focused, specifically, on three outcome variables.",
        "correct": true
      },
      {
        "sent": "Specifically the intervention targeted smoking and diet.",
        "correct": false,
        "exp": "A comma is required after 'Specifically' at the start of a sentence."
      },
      {
        "sent": "She is interested in science, specifically marine biology.",
        "correct": true
      },
      {
        "sent": "The policy reduced wait times specifically it cut them by 40%.",
        "correct": false,
        "exp": "'Specifically' needs punctuation before it when connecting two clauses."
      }
    ],
    "alts": [
      "In particular"
    ]
  },
  {
    "cat": "Conclusion",
    "word": "All in all",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "Used to give a final overall judgment after considering everything.",
    "pos": "Sentence-initial (with comma) OR mid-sentence (between two commas)",
    "pos_detail": "Start: 'All in all, the project was a success.' | Mid: 'The project was, all in all, a worthwhile investment.' — more conversational than 'in conclusion'.",
    "note": "'All in all' is a balanced summary that considers both positives and negatives. More conversational than 'in conclusion' or 'taken together'. Common in presentations and everyday writing.",
    "key_diff": "'In conclusion' is formal and academic. 'All in all' is more balanced and conversational: 'All in all, it was a worthwhile experience despite the challenges.'",
    "contexts": [
      {
        "ctx": "The conference had some excellent keynotes but a few sessions were disappointing.",
        "sent": "All in all, it was a highly valuable experience for everyone who attended."
      },
      {
        "ctx": "The project encountered delays and budget overruns, but delivered strong results.",
        "sent": "All in all, the benefits outweighed the costs by a significant margin."
      }
    ],
    "acad": [
      "All in all, the evidence supports cautious optimism about the effectiveness of mindfulness-based interventions.",
      "All in all, the methodological advances of the past decade have substantially improved our ability to draw causal inferences from observational data."
    ],
    "daily": [
      "The trip had some rain and a missed flight, but we saw amazing places. All in all, I'd do it again.",
      "All in all, it was a productive week despite the slow start on Monday."
    ],
    "pos_quiz": [
      {
        "sent": "All in all, the project was a success despite early setbacks.",
        "correct": true
      },
      {
        "sent": "The project was, all in all, a worthwhile investment for the department.",
        "correct": true
      },
      {
        "sent": "All in all the semester was challenging but rewarding.",
        "correct": false,
        "exp": "A comma is required after 'All in all' at the start of a sentence."
      },
      {
        "sent": "The results were mixed. All in all, the benefits outweighed the costs.",
        "correct": true
      },
      {
        "sent": "It was all in all a good experience for the team.",
        "correct": false,
        "exp": "'All in all' should be set off by commas: 'It was, all in all, a good experience.'"
      }
    ],
    "alts": [
      "Overall",
      "To sum up"
    ]
  },
  {
    "cat": "Conjunction",
    "word": "For (conjunction)",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "A coordinating conjunction that connects a reason to a result. It means 'because' but sounds more formal and literary.",
    "pos": "Mid-sentence only — joins two independent clauses with a comma before it",
    "pos_detail": "'She stayed home, for she was feeling unwell.' — 'for' CANNOT start a sentence as a conjunction. It always comes between two clauses.",
    "note": "As a conjunction, 'for' is quite formal and literary. In everyday English, use 'because' instead. Never start a sentence with conjunction 'for' — that creates a fragment.",
    "key_diff": "'Because' can start a sentence: 'Because it rained, we stayed in.' 'For' cannot: ✗ 'For it rained, we stayed in.' ✓ 'We stayed in, for it was raining.'",
    "contexts": [
      {
        "ctx": "The team decided to postpone the launch.",
        "sent": "They made this decision, for the testing phase had revealed critical bugs."
      },
      {
        "ctx": "The committee approved the proposal without debate.",
        "sent": "The evidence was overwhelming, for three independent studies had reached the same conclusion."
      }
    ],
    "acad": [
      "The authors urge caution in generalizing, for the sample was drawn from a single institution.",
      "The finding is noteworthy, for it contradicts the prevailing theoretical assumption."
    ],
    "daily": [
      "I took an umbrella, for the sky looked threatening.",
      "He must have left early, for his car was already gone when I arrived."
    ],
    "pos_quiz": [
      {
        "sent": "She stayed home, for she was feeling unwell.",
        "correct": true
      },
      {
        "sent": "The evidence was strong, for three studies confirmed the finding.",
        "correct": true
      },
      {
        "sent": "For it was raining, we cancelled the event.",
        "correct": false,
        "exp": "Conjunction 'for' cannot start a sentence. Use 'Because it was raining, ...' instead."
      },
      {
        "sent": "He left early for his car was already gone.",
        "correct": false,
        "exp": "A comma is required before 'for' when it joins two independent clauses."
      },
      {
        "sent": "I took an umbrella, for the sky looked threatening.",
        "correct": true
      }
    ],
    "alts": []
  },
  {
    "cat": "Conjunction",
    "word": "And",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "A coordinating conjunction that connects equal and similar ideas — adds one thing to another.",
    "pos": "Mid-sentence (most common) OR sentence-initial (informal, for emphasis)",
    "pos_detail": "Between clauses: 'She studied hard, and she passed the exam.' | In lists: 'age, income, and education' | Sentence-initial (informal): 'And that's exactly what happened.'",
    "note": "'And' is the most common conjunction. Use a comma before 'and' when it joins two independent clauses. In lists, the Oxford comma before 'and' is optional but recommended in academic writing.",
    "key_diff": "Two clauses need a comma: 'She studied, and she passed.' A compound predicate does NOT: 'She studied hard and passed.' (one subject, two verbs — no comma).",
    "contexts": [
      {
        "ctx": "The intervention improved physical health outcomes.",
        "sent": "And it also led to significant gains in mental wellbeing."
      },
      {
        "ctx": "Income inequality has risen steadily over the past two decades.",
        "sent": "Unemployment fell during this period, and consumer spending increased."
      }
    ],
    "acad": [
      "The model controls for age, gender, and socioeconomic background.",
      "Reading scores improved by 12%, and mathematics scores improved by 8%."
    ],
    "daily": [
      "I went to the store and bought some groceries.",
      "She's smart, hardworking, and always willing to help."
    ],
    "pos_quiz": [
      {
        "sent": "She studied hard, and she passed the exam.",
        "correct": true
      },
      {
        "sent": "The model controls for age, gender, and socioeconomic status.",
        "correct": true
      },
      {
        "sent": "She studied hard and passed the exam.",
        "correct": true
      },
      {
        "sent": "She studied hard, and passed the exam.",
        "correct": false,
        "exp": "Do not use a comma before 'and' when it joins two verbs with the same subject (compound predicate)."
      },
      {
        "sent": "Income rose and unemployment fell during this period.",
        "correct": true
      }
    ],
    "alts": []
  },
  {
    "cat": "Conjunction",
    "word": "Nor",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "A coordinating conjunction that connects two negative ideas. It means 'and not' or 'also not'.",
    "pos": "Mid-sentence — joins two negative clauses. Requires subject-verb inversion after 'nor'.",
    "pos_detail": "'She did not call, nor did she write.' — after 'nor', the auxiliary verb comes BEFORE the subject (inversion). Often paired with 'neither'.",
    "note": "'Nor' always connects negative ideas. When 'nor' starts the second clause, you MUST invert the subject and auxiliary verb. 'Neither … nor' is a correlative pair.",
    "key_diff": "'Or' connects positive alternatives: 'tea or coffee.' 'Nor' connects negative alternatives: 'neither tea nor coffee.' After 'nor' in a clause: inversion is required.",
    "contexts": [
      {
        "ctx": "The study did not find a significant main effect.",
        "sent": "Nor did it find any significant interaction effects."
      },
      {
        "ctx": "The policy failed to reduce emissions.",
        "sent": "It did not lower energy consumption, nor did it change public behavior."
      }
    ],
    "acad": [
      "The treatment group showed no improvement; nor did the placebo group.",
      "Neither the quantitative nor the qualitative data supported the original hypothesis."
    ],
    "daily": [
      "She didn't call, nor did she send a message.",
      "I have neither the time nor the energy to deal with this today."
    ],
    "pos_quiz": [
      {
        "sent": "She didn't call, nor did she write.",
        "correct": true
      },
      {
        "sent": "Neither the survey nor the interview data supported the claim.",
        "correct": true
      },
      {
        "sent": "She didn't call, nor she wrote back.",
        "correct": false,
        "exp": "After 'nor', subject-verb inversion is required: 'nor did she write.'"
      },
      {
        "sent": "He has neither the time nor the patience for this.",
        "correct": true
      },
      {
        "sent": "The study found no main effect nor interaction effect.",
        "correct": false,
        "exp": "When 'nor' joins two clauses, use a comma before it and invert the second clause: '…effect, nor did it find…'"
      }
    ],
    "alts": []
  },
  {
    "cat": "Conjunction",
    "word": "But",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "A coordinating conjunction that connects equal but different or contrasting ideas.",
    "pos": "Mid-sentence (most common) OR sentence-initial (informal, for emphasis)",
    "pos_detail": "Between clauses: 'The sample was small, but the results were clear.' | Sentence-initial (informal): 'But that's not the whole story.'",
    "note": "'But' is the most common contrast conjunction. Use a comma before 'but' when it joins two independent clauses. Starting a sentence with 'But' is acceptable in modern writing for emphasis.",
    "key_diff": "'But' is a conjunction (joins clauses): 'I tried, but I failed.' 'However' is an adverb (needs a period or semicolon): 'I tried. However, I failed.' Never write: ✗ 'I tried, however I failed.'",
    "contexts": [
      {
        "ctx": "The initial results looked promising.",
        "sent": "But the replication study told a different story."
      },
      {
        "ctx": "Economic growth continued throughout the decade.",
        "sent": "Wages remained stagnant, but corporate profits reached record highs."
      }
    ],
    "acad": [
      "The correlation was statistically significant, but the effect size was negligible.",
      "Sample attrition was higher than expected, but sensitivity analyses confirmed the robustness of the main findings."
    ],
    "daily": [
      "I wanted to go, but I had too much work.",
      "The food was great, but the service was slow."
    ],
    "pos_quiz": [
      {
        "sent": "The sample was small, but the results were clear.",
        "correct": true
      },
      {
        "sent": "But the replication study told a different story.",
        "correct": true
      },
      {
        "sent": "The sample was small but the results were clear.",
        "correct": false,
        "exp": "A comma is needed before 'but' when it joins two independent clauses."
      },
      {
        "sent": "She is tired but happy after the marathon.",
        "correct": true
      },
      {
        "sent": "Although the sample was small, but the results were clear.",
        "correct": false,
        "exp": "Never use 'although' and 'but' together. Pick one: 'Although X, Y.' or 'X, but Y.'"
      }
    ],
    "alts": [
      "Yet"
    ]
  },
  {
    "cat": "Conjunction",
    "word": "Or",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "A coordinating conjunction that connects two equal choices or alternatives.",
    "pos": "Mid-sentence — joins alternatives in clauses, phrases, or single words",
    "pos_detail": "Between clauses: 'You can take the bus, or you can walk.' | Between words: 'tea or coffee' | With 'either': 'either X or Y'",
    "note": "Use a comma before 'or' when it joins two independent clauses. No comma when joining words or phrases. 'Either … or' emphasizes the choice between exactly two options.",
    "key_diff": "'Or' presents alternatives: 'Is it genetic or environmental?' 'And' adds: 'It is genetic and environmental.' 'Nor' negates: 'It is neither genetic nor environmental.'",
    "contexts": [
      {
        "ctx": "Participants were randomly assigned to one of two conditions.",
        "sent": "They received either the active treatment or a placebo for eight weeks."
      },
      {
        "ctx": "The policy must be revised before the next fiscal year.",
        "sent": "Lawmakers can increase the tax rate, or they can reduce the scope of the program."
      }
    ],
    "acad": [
      "Future studies should use longitudinal designs or, at minimum, collect data at multiple time points.",
      "The observed pattern may reflect selection bias, or it may indicate a genuine causal pathway."
    ],
    "daily": [
      "Would you like tea or coffee?",
      "We can eat at home, or we can go to a restaurant."
    ],
    "pos_quiz": [
      {
        "sent": "You can take the bus, or you can walk.",
        "correct": true
      },
      {
        "sent": "Would you like tea or coffee?",
        "correct": true
      },
      {
        "sent": "Either the treatment or the placebo was administered.",
        "correct": true
      },
      {
        "sent": "You can take the bus or you can walk.",
        "correct": false,
        "exp": "A comma is needed before 'or' when it joins two independent clauses."
      },
      {
        "sent": "She didn't know whether to laugh or to cry.",
        "correct": true
      }
    ],
    "alts": []
  },
  {
    "cat": "Conjunction",
    "word": "So",
    "reg": [
      "Academic",
      "Spoken/Daily"
    ],
    "meaning": "A coordinating conjunction that connects a result to a reason — shows that the second idea is a consequence of the first.",
    "pos": "Mid-sentence (joins two clauses with comma before it) OR sentence-initial (informal)",
    "pos_detail": "Between clauses: 'It was raining, so we stayed home.' | Sentence-initial (informal): 'So what should we do next?'",
    "note": "'So' is the most conversational cause-effect word. In academic writing, prefer 'therefore', 'thus', or 'consequently'. Always use a comma before 'so' when it joins two clauses.",
    "key_diff": "'So' (conjunction) joins clauses: 'It rained, so we stayed in.' 'Therefore' (adverb) needs a period or semicolon: 'It rained. Therefore, we stayed in.' In academic writing, use 'therefore' or 'thus'.",
    "contexts": [
      {
        "ctx": "The original deadline was not feasible.",
        "sent": "So the project timeline was extended by three months."
      },
      {
        "ctx": "Participation rates were declining each semester.",
        "sent": "The department redesigned the course, so enrollment recovered the following year."
      }
    ],
    "acad": [
      "The assumptions of normality were not met, so non-parametric tests were employed.",
      "Attrition was high in the control group, so intention-to-treat analyses were conducted."
    ],
    "daily": [
      "It started raining, so we went inside.",
      "I was hungry, so I ordered a pizza."
    ],
    "pos_quiz": [
      {
        "sent": "It was raining, so we stayed home.",
        "correct": true
      },
      {
        "sent": "The data were non-normal, so non-parametric tests were used.",
        "correct": true
      },
      {
        "sent": "It was raining so we stayed home.",
        "correct": false,
        "exp": "A comma is needed before 'so' when it joins two independent clauses."
      },
      {
        "sent": "So what should we do about this problem?",
        "correct": true
      },
      {
        "sent": "She studied hard so she passed the exam.",
        "correct": false,
        "exp": "A comma is needed before 'so' when it introduces a result clause: '…hard, so she passed.'"
      }
    ],
    "alts": []
  }
];

const GUIDE = [
  {
    "pos": "Sentence-initial + comma",
    "rule": "Word, + main clause.",
    "explanation": "The linking word starts the sentence, followed by a comma. This is the default position for the majority of linking words. It clearly signals the relationship between the new sentence and the previous one.",
    "words": [
      "Furthermore,",
      "Moreover,",
      "In addition,",
      "Besides,",
      "However,",
      "Nevertheless,",
      "Nonetheless,",
      "On the other hand,",
      "Therefore,",
      "Thus,",
      "Hence,",
      "Consequently,",
      "As a result,",
      "First / Firstly,",
      "Subsequently,",
      "Then / Next,",
      "Finally / Lastly,",
      "Meanwhile,",
      "For example,",
      "For instance,",
      "In particular,",
      "Indeed,",
      "In fact,",
      "Importantly,",
      "Notably,",
      "Above all,",
      "In conclusion,",
      "In summary,",
      "To sum up,",
      "Taken together,",
      "Overall,",
      "In contrast,",
      "Similarly,",
      "Likewise,",
      "Conversely,",
      "On the contrary,",
      "Accordingly,",
      "In other words,",
      "Specifically,",
      "All in all,"
    ],
    "example": "\"Furthermore, the model shows strong validity.\" · \"In particular, the oldest age group showed the strongest effect.\" · \"Importantly, this pattern replicates across all groups.\" · \"Also, don't forget your ID.\" (informal only)",
    "comma_note": "⚠️ Always put a comma directly after the linking word — no exceptions for this position."
  },
  {
    "pos": "Mid-sentence (inserted, between two commas)",
    "rule": "Subject + verb, word, + rest of sentence.",
    "explanation": "The linking word is inserted into the middle of a sentence and surrounded by TWO commas. This adds variety and can create emphasis. Note: the same words that go sentence-initial can often go mid-sentence too.",
    "words": [
      "however,",
      "therefore,",
      "thus,",
      "hence,",
      "consequently,",
      "nevertheless,",
      "nonetheless,",
      "moreover,",
      "furthermore,",
      "indeed,",
      "in fact,",
      "in particular,",
      "notably,",
      "importantly,",
      "above all,",
      "in summary,",
      "overall,",
      "meanwhile,",
      "on the other hand,",
      "similarly,",
      "likewise,",
      "conversely,",
      "on the contrary,",
      "accordingly,",
      "in other words,",
      "specifically,",
      "all in all,"
    ],
    "example": "\"The initial results were promising; the replication, however, was less convincing.\" · \"Three variables were, consequently, removed from the model.\" · \"The results, overall, support the hypothesis.\"",
    "comma_note": "⚠️ Two commas required — one BEFORE and one AFTER the word. Missing either comma is a punctuation error."
  },
  {
    "pos": "Sentence-final",
    "rule": "Main clause + word.",
    "explanation": "Only two linking words naturally end a sentence — and they have OPPOSITE comma rules. 'Overall' needs no comma before it. 'Though' needs a comma before it. This is one of the most commonly confused rules.",
    "words": [
      "overall (no comma before it)",
      "though (comma required before it)"
    ],
    "example": "\"The model performed well overall.\" (no comma) · \"The ending was weak, though.\" (comma required)",
    "comma_note": "⚠️ 'overall' → no comma: 'It went well overall.' | 'though' → comma required: 'It was hard, though.' These two have opposite rules."
  },
  {
    "pos": "After main clause (subordinating conjunction)",
    "rule": "Main clause + word + dependent clause.",
    "explanation": "When a subordinating conjunction comes AFTER the main clause, no comma is needed. When it comes BEFORE (starting the sentence), a comma separates the two clauses.",
    "words": [
      "although",
      "though",
      "while",
      "because",
      "since",
      "as",
      "even though",
      "whereas"
    ],
    "example": "\"We stayed home because it was raining.\" (no comma) · \"Although it rained, we went out.\" (comma needed when clause comes first)",
    "comma_note": "⚠️ Clause order changes the comma: 'Although X, Y.' (comma) vs 'Y although X.' (no comma)."
  },
  {
    "pos": "Directly after the noun it modifies",
    "rule": "Noun + word + examples / exact specification.",
    "explanation": "These words are placed immediately after the noun or noun phrase they are explaining. They cannot start a sentence. 'Such as' introduces examples; 'namely' introduces a complete, exact list.",
    "words": [
      "such as",
      "namely"
    ],
    "example": "\"Approaches such as randomized controlled trials and quasi-experiments are widely used.\" · \"Three questions, namely reliability, validity, and fairness, were addressed.\"",
    "comma_note": "⚠️ Neither 'such as' nor 'namely' can start a sentence. 'Namely' is usually preceded by a comma."
  },
  {
    "pos": "Preposition phrase (before a noun phrase only)",
    "rule": "Word + noun / noun phrase  (NOT word + subject + verb)",
    "explanation": "These words are prepositions, not conjunctions. They must be followed by a noun or noun phrase — never a full sentence. Using them before a full clause is one of the most common grammar mistakes.",
    "words": [
      "due to",
      "in addition to",
      "because of",
      "in contrast to",
      "as a result of",
      "despite",
      "despite",
      "in spite of"
    ],
    "example": "\"Due to bad weather, the event was cancelled.\" · \"In addition to surveys, interviews were also conducted.\" · \"As a result of the delay, the deadline was extended.\"",
    "comma_note": "⚠️ Test: replace with 'because of' — if it works, a noun must follow. ✗ 'Due to it was raining…' ✓ 'Due to the rain…' or 'Because it was raining…'"
  },
  {
    "pos": "Before the main verb (mid-sentence) — 'also' only",
    "rule": "Subject + (auxiliary) + also + main verb.",
    "explanation": "'Also' is unique — its default position is before the main verb (or after the first auxiliary). This makes it different from all other linking words. It can go sentence-initial in informal writing, but this should be avoided in formal academic writing.",
    "words": [
      "also"
    ],
    "example": "\"She also completed the survey.\" · \"Participants were also asked to rate their confidence.\" · \"Also, don't forget your ID.\" (informal — avoid in academic writing)",
    "comma_note": "⚠️ Do NOT put 'also' at the end of a sentence: ✗ 'She completed the survey also.' ✓ 'She also completed the survey.'"
  },
  {
    "pos": "Correlative pair (two-part structure)",
    "rule": "Not only A, but also B.  /  Both A and B.",
    "explanation": "These expressions always work in pairs — both halves must be present. When 'not only' begins a sentence, the subject and auxiliary verb swap positions (inversion). Missing this inversion is a grammatical error in formal writing.",
    "words": [
      "not only … but also",
      "both … and",
      "either … or",
      "neither … nor"
    ],
    "example": "\"Not only did the intervention improve scores, but it also raised confidence.\" · \"Both reliability and validity were assessed.\"",
    "comma_note": "⚠️ Inversion: 'Not only DID she finish early, but she also…' — auxiliary 'did' must come before subject 'she'."
  },
  {
    "pos": "Coordinating conjunction (FANBOYS)",
    "rule": "Independent clause, + conjunction + independent clause.",
    "explanation": "The seven coordinating conjunctions (For, And, Nor, But, Or, Yet, So — FANBOYS) join two independent clauses of equal grammatical weight. A comma is placed BEFORE the conjunction. Unlike subordinating conjunctions, the clause order usually cannot be reversed.",
    "words": [
      "for",
      "and",
      "nor",
      "but",
      "or",
      "yet",
      "so"
    ],
    "example": "\"She studied hard, and she passed.\" · \"It rained, so we stayed in.\" · \"He didn't call, nor did he write.\" · \"The sample was small, but the results were clear.\"",
    "comma_note": "⚠️ Comma BEFORE the conjunction when joining two full clauses. No comma when joining words or phrases: 'tea and coffee' (no comma)."
  }
];
