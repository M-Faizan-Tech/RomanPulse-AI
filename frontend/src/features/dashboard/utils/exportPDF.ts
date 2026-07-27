import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import type {
  FeedbackAnalysisResult,
} from "@/features/feedback/types/feedback.types";


export function exportPDF(
  analysis: FeedbackAnalysisResult
) {

  const doc = new jsPDF();

  const pageWidth =
    doc.internal.pageSize.getWidth();

  const pageHeight =
    doc.internal.pageSize.getHeight();


  let yPosition = 20;


  const checkPage = (
    space = 20
  ) => {

    if (
      yPosition + space >
      pageHeight - 20
    ) {

      doc.addPage();
      yPosition = 20;

    }

  };


  const addTitle = (
    title:string
  ) => {

    checkPage();

    doc.setFontSize(14);

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.text(
      title,
      14,
      yPosition
    );

    yPosition += 8;

    doc.setFont(
      "helvetica",
      "normal"
    );

  };


  const addText = (
    text:string
  ) => {

    const lines =
      doc.splitTextToSize(
        text,
        pageWidth - 28
      );


    checkPage(
      lines.length * 6
    );


    doc.setFontSize(10);


    doc.text(
      lines,
      14,
      yPosition
    );


    yPosition +=
      lines.length * 6 + 8;

  };


  // Header

  doc.setFontSize(20);

  doc.setFont(
    "helvetica",
    "bold"
  );


  doc.text(
    "RomanPulse AI",
    14,
    yPosition
  );


  yPosition += 10;


  doc.setFontSize(11);

  doc.setFont(
    "helvetica",
    "normal"
  );


  doc.text(
    "AI Customer Feedback Intelligence Report",
    14,
    yPosition
  );


  yPosition += 15;



  // KPI Overview

  addTitle(
    "Brand Overview"
  );


  autoTable(
    doc,
    {
      startY:yPosition,

      head:[
        [
          "Metric",
          "Result"
        ]
      ],

      body:[
        [
          "Sentiment",
          analysis.sentiment
        ],

        [
          "Emotion",
          analysis.emotion
        ],

        [
          "Urgency",
          analysis.urgency
        ],

        [
          "Brand Health",
          `${analysis.brandHealthScore}/100`
        ]
      ],

      theme:"grid",

      styles:{
        fontSize:10
      }
    }
  );


  yPosition =
    (doc as any)
      .lastAutoTable
      .finalY + 12;



  // Sentiment Breakdown

  addTitle(
    "Sentiment Breakdown"
  );


  autoTable(
    doc,
    {

      startY:yPosition,

      head:[
        [
          "Sentiment",
          "Percentage"
        ]
      ],

      body:[
        [
          "Positive",
          `${analysis.sentimentBreakdown.positive}%`
        ],

        [
          "Neutral",
          `${analysis.sentimentBreakdown.neutral}%`
        ],

        [
          "Negative",
          `${analysis.sentimentBreakdown.negative}%`
        ]
      ],

      theme:"grid",

      styles:{
        fontSize:10
      }

    }
  );


  yPosition =
    (doc as any)
      .lastAutoTable
      .finalY + 12;



  // AI Summary

  addTitle(
    "AI Summary"
  );


  addText(
    analysis.summaryPoints.length
      ? analysis.summaryPoints
          .map(
            point =>
            `• ${point}`
          )
          .join("\n")
      :
      "No summary points available."
  );



  // Complaint Analysis

  addTitle(
    "Complaint Analysis"
  );


  autoTable(
    doc,
    {

      startY:yPosition,

      head:[
        [
          "Category",
          "Percentage"
        ]
      ],


      body:
        analysis.complaintAnalysis.map(
          item => [
            item.category,
            `${item.percentage}%`
          ]
        ),


      theme:"grid",

      styles:{
        fontSize:10
      }

    }
  );


  yPosition =
    (doc as any)
      .lastAutoTable
      .finalY + 12;



  // Suggested Reply

  addTitle(
    "Suggested Reply"
  );


  addText(
    analysis.shortSuggestedReply ||
    "No suggested reply available."
  );



  // Recommendations

  addTitle(
    "Priority Recommendations"
  );


  autoTable(
    doc,
    {

      startY:yPosition,

      head:[
        [
          "Priority",
          "Action"
        ]
      ],


      body:
        analysis.priorityRecommendations.map(
          item=>[
            item.priority,
            item.action
          ]
        ),


      theme:"grid",

      styles:{
        fontSize:10
      }

    }
  );



  // Footer

  const pages =
    doc.getNumberOfPages();


  for(
    let i=1;
    i<=pages;
    i++
  ){

    doc.setPage(i);

    doc.setFontSize(8);

    doc.text(
      `RomanPulse AI Report | Page ${i}/${pages}`,
      14,
      pageHeight - 10
    );

  }



  doc.save(
    "RomanPulse_AI_Report.pdf"
  );

}