import formApi from "@app/service/form.service";
import { TypeQuestion } from "@app/common/constants";
import { IBlock } from "@app/common/interfaces";
import Button from "@app/components/form/Button";
import ControllerButton from "@app/components/form/ControllerButton";
import MatrixQuestion from "@app/components/form/MatrixQuestion";
import NPSQuestion from "@app/components/form/NPSQuestion";
import RattingQuestion from "@app/components/form/RattingQuestion";
import SelectQuestion from "@app/components/form/SelectQuestion";
import TextQuestion from "@app/components/form/TextQuestion";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@app/hooks";
import Status from "@app/components/form/Status";

export default function Form() {
  const [data, setData] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [status, setStatus] = useState(0);
  const { id } = useParams();

  const selector = useAppSelector((state) => state);

  const fetchData = useCallback(async (id) => {
    const data = await formApi.get(id);
    setData(data);
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const postAnswer = useCallback(async (data) => {
    let res = await formApi.postResponse(data);
    if (res.error == 0) {
      // todo: show message
      setStatus(1)
    } else{
      alert("Vui long thu lai!");
    }
  }, []);

  const btn_submit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let merge_question = [
      ...selector.matrix_question,
      ...selector.nps_question,
      ...selector.text_question,
      ...selector.selection_question,
      ...selector.ratting_question,
    ];
    let question_required = merge_question.filter(
      (question) => question.is_required
    );

    let pass_required = question_required.filter((question) => {
      if (["selection", "matrix"].includes(question.type)) {
        let value = question.value as string[];
        if (value.length == 0) {
          return false;
        }
      } else {
        if (question.value == 0 || question.value == "") {
          return false;
        }
      }
      return true;
    });

    if (pass_required.length != question_required.length) {
      alert("Vui long dien day du cac truong *");
      return;
    }
    let answers = merge_question.map((item) => {
      return {
        id: item.id,
        value: item.value,
      };
    });
    let data = {
      formId: id,
      answers: answers,
    };
    postAnswer(data);
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <div dir="ltr" className="nf-root">
      {status == 0 ? (
        <div className="nf-form-wrapper">
          <div id="top-scroll" style={{ width: "0px", height: "0px" }} />
          <div
            className="nf-form-container"
            id="nf-form-container"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div
              className="nf-questions-container"
              style={{ backgroundColor: "rgba(34, 0, 255, 0.008)" }}
            >
              {data?.template?.pages?.map(
                (page: { blocks: IBlock[] }, index: number) => (
                  <>
                    {index === currentPage &&
                      page.blocks.map((block: IBlock, id: number) => {
                        switch (block.type) {
                          case TypeQuestion.TEXT:
                            return (
                              <TextQuestion
                                type={block.type}
                                question={block.question}
                                key={id}
                                id={block.id}
                                stt={id + 1}
                                is_required={block.isRequired}
                              />
                            );
                          case TypeQuestion.SELECTION:
                            return (
                              <SelectQuestion
                                id={block.id}
                                key={id}
                                type={block.type}
                                question={block.question}
                                answers={block.answers}
                                multi_select={block.multiSelect}
                                inline={block.inline}
                                other={block.other}
                                is_required={block.isRequired}
                                stt={id + 1}
                              />
                            );
                          case TypeQuestion.MATRIX:
                            return (
                              <MatrixQuestion
                                id={block.id}
                                key={id}
                                type={block.type}
                                question={block.question}
                                answers={block.answers}
                                values={block.values}
                                is_required={block.isRequired}
                                stt={id + 1}
                              />
                            );
                          case TypeQuestion.NPS:
                            return (
                              <NPSQuestion
                                id={block.id}
                                key={id}
                                type={block.type}
                                question={block.question}
                                scale={block.scale}
                                min={block.min}
                                max={block.max}
                                stt={id + 1}
                                is_required={block.isRequired}
                              />
                            );
                          case TypeQuestion.RATTING:
                            return (
                              <RattingQuestion
                                id={block.id}
                                key={id}
                                type={block.type}
                                question={block.question}
                                value={block.value}
                                min={block.min}
                                max={block.max}
                                stt={id + 1}
                                is_required={block.isRequired}
                              />
                            );
                        }
                      })}
                    {index === currentPage &&
                      (data.template.pages.length == 1 ? (
                        <Button
                          title={data?.template?.button}
                          btn_submit={btn_submit}
                        />
                      ) : (
                        <ControllerButton
                          total_pages={data?.template?.pages.length}
                          current_page={index}
                          next_page={nextPage}
                          prev_page={prevPage}
                          btn_submit={btn_submit}
                          title={data?.template?.button}
                        />
                      ))}
                  </>
                )
              )}
            </div>
            <div
              className="nf-powered-by-container"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            >
              <a
                tabIndex={-1}
                rel="noopener noreferrer"
                className="nf-link"
                target="_blank"
                style={{
                  textDecoration: "none",
                  fontSize: "10px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    color: "rgb(0, 0, 0)",
                    fontWeight: 400,
                  }}
                >
                  Powered by{" "}
                  <strong style={{ color: "rgb(34, 0, 255)" }}>ZaloForm</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Status
          title={data?.template?.complete?.title}
          description={data?.template?.complete?.description}
        />
      )}
      <div
        className="nf-toasts-wrapper"
        style={{ margin: "0px", top: "30px" }}
      />
    </div>
  );
}
