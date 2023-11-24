import React, { useCallback, useMemo, useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Button, Table, Typography } from "antd";
import TextArea from "../../../components/TextArea";

const Command: React.FC = () => {
  const methods = useFormContext();
  const {
    control,
    getValues,
    setValue,
    formState: { errors: formErrors },
  } = methods;
  const [editableIndex, setEditableIndex] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "bands",
  });

  const changeBandHandler = useCallback(() => {
    if (!editableIndex) return;
    update(editableIndex - 1, {
      body: getValues("orderData.commandData.body"),
    });

    setValue("orderData.commandData.body", "");
    setEditMode(false);
  }, [setValue, editableIndex, update, getValues]);

  const editPointHandler = useCallback(
    (item: any) => {
      setEditableIndex(item.index);
      setValue("orderData.commandData.body", item?.body);
      setEditMode(true);
    },
    [setValue]
  );

  const columns: any[] = [
    {
      title: "№",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Bənd",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      width: 50,
      render: (_record: any, item: any, index: number) => (
        <>
          <Button type="link" onClick={() => editPointHandler(item)}>
            <Typography color="#B00020">Dəyişdir</Typography>
          </Button>
          <Button type="link" onClick={() => remove(index)}>
            <Typography color="#B00020">Sil</Typography>
          </Button>
        </>
      ),
    },
  ];

  const bandsDataSource = useMemo(
    () =>
      fields?.map((item, index) => ({
        id: item?.id,
        body: item?.body,
        index: index + 1,
        key: item?.id,
      })),
    [fields]
  );

  const handleAddBand = useCallback(() => {
    append({
      body: getValues("orderData.commandData.body"),
    });
    setValue("orderData.commandData.body", "");
  }, [getValues, append, setValue]);

  return (
    <div>
      <form {...methods}>
        <div className="emr-first-row">
          <h4>Bəndin mətni</h4>
          <TextArea
            name="orderData.commandData.body"
            control={control}
            rows={4}
            error={formErrors?.orderData?.commandData?.bands}
          />
        </div>
        <div className="addTextBtn">
          <Button
            type="primary"
            style={{
              background: "#008000",
              color: "#fff",
              width: 100,
            }}
            onClick={changeBandHandler}
            disabled={!editMode}
          >
            Dəyişdir
          </Button>
          <Button
            type="primary"
            style={{ background: "#008000", color: "#fff", width: 100 }}
            onClick={handleAddBand}
          >
            Əlavə et
          </Button>
        </div>
        <div className="emr-second-row">
          {fields.length !== 0 && (
            <>
              <h4>Bəndlər</h4>
              <Table
                columns={columns}
                dataSource={bandsDataSource}
                rowKey="index"
              />
            </>
          )}
          {formErrors?.orderData?.commandData?.bands && (
            <p className="err">
              {(formErrors?.orderData?.commandData?.bands as any)?.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Command;
