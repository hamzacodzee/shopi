'use client';
import CommonDataTable from "@/helper/CommonComponent/CommonDataTable";
import _ from 'lodash';
import Loader from "@/helper/CommonComponent/Loader";
import {
  deleteItem,
  getAllDataList,
  setCurrentPage,
  setPageLimit,
  setSearchParam,
} from "@/store/slice/commonSlice";
import { setDeletePurchaseDialog, setPurchaseTableData } from "@/store/slice/purchaseSlice";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase_search_key } from "@/helper/commonValues";

const tableColumns = [
  { field: 'manufacturer_name', header: "Manufacturer Name" },
  { field: 'purchase_date', header: "Purchase Date" },
  { field: 'bill_no', header: "Bill No" },
  { field: 'gst_no', header: "GST No." },
  { field: 'mobile_number', header: "Mobile Number" },
  { field: 'address', header: "Address" },
]

function PurchaseList() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [selectedPurchaseData, setSelectedPurchaseData] = useState({});
  const { allPurchaseListData, deletePurchaseDialog } = useSelector(({ purchase }) => purchase)
  const { commonLoading, currentPage, searchParam, pageLimit } = useSelector(({ common }) => common)

  const fetchPurchaseList = useCallback(async (
    start = 1,
    limit = 7,
    search = ''
  ) => {
    const payload = {
      modal_to_pass: "Purchase",
      search_key: purchase_search_key,
      start: start,
      limit: limit,
      search: search?.trim(),
    }
    const res = await dispatch(getAllDataList(payload))

  }, [dispatch])

  useEffect(() => {
    fetchPurchaseList(
      currentPage,
      pageLimit,
      searchParam
    )
  }, []);

  const onPageChange = page => {
    if (page !== currentPage) {
      let pageIndex = currentPage;
      if (page?.page === 'Prev') pageIndex--;
      else if (page?.page === 'Next') pageIndex++;
      else pageIndex = page;

      dispatch(setCurrentPage(pageIndex));
      fetchPurchaseList(
        pageIndex,
        pageLimit,
        searchParam,

      );
    }
  };

  const onPageRowsChange = page => {
    dispatch(setCurrentPage(page === 0 ? 0 : 1));
    dispatch(setPageLimit(page));
    const pageValue =
      page === 0
        ? allPurchaseListData?.totalRows
          ? allPurchaseListData?.totalRows
          : 0
        : page;
    const prevPageValue =
      pageLimit === 0
        ? allPurchaseListData?.totalRows
          ? allPurchaseListData?.totalRows
          : 0
        : pageLimit;
    if (
      prevPageValue < allPurchaseListData?.totalRows ||
      pageValue < allPurchaseListData?.totalRows
    ) {
      fetchPurchaseList(
        page === 0 ? 0 : 1,
        page,
        searchParam,

      );
    }
  };

  const handleSearchInput = e => {
    dispatch(setCurrentPage(1));

    fetchPurchaseList(
      currentPage,
      pageLimit,
      e.target.value?.trim(),
    );
  };

  const handleChangeSearch = e => {
    debounceHandleSearchInput(e);
    dispatch(setSearchParam(e.target.value));
  }

  const debounceHandleSearchInput = useCallback(
    _.debounce(e => {
      handleSearchInput(e);
    }, 800),
    [],
  );

  const handleAddItem = () => {
    dispatch(setPurchaseTableData([]))
    router.push('/purchase/add')
  };

  const handleEditItem = async (id) => {
    router.push(`/purchase/${id}`)
  };

  const handleDeleteItem = item => {
    dispatch(setDeletePurchaseDialog(true));
    setSelectedPurchaseData(item)
  };

  const hidePurchaseDeleteDialog = () => {
    dispatch(setDeletePurchaseDialog(false));
  };

  const handleDeletePurchaseItem = async () => {
    const payload = {
      modal_to_pass: 'purchase',
      id: selectedPurchaseData?._id,
      search_key: purchase_search_key,
      start: currentPage,
      limit: pageLimit,
      search: searchParam
    };
    const res = await dispatch(deleteItem(payload))
    if (res?.payload) {
      dispatch(setDeletePurchaseDialog(false));
    }
  };

  const actionBodyResponsiveTemplate = rowData => {
    return (
      <>
        <p className="text-left text-sm" onClick={() => handleEditItem(rowData?._id)}>
          Edit
        </p>
        <p
          className="text-left text-sm"
          onClick={() => handleDeleteItem(rowData)}
        >
          Delete
        </p>
      </>
    );
  };

  const responsiveTableTemplete = rowData => {

    return (
      <div className="container flex flex-col border-white border-2 w-full">
        <div className="flex flex-1 flex-col md:flex-row">
          <div className="flex-1 border-r-2 border-white p-2">
            <p className="text-left text-sm">
              Code: {rowData?.code}
            </p>
            <p className="text-left text-sm">
              Full Name: {rowData?.manufacturer_name}
            </p>
            <p className="text-left text-sm">
              Phone Number: {rowData?.mobile_number}
            </p>
          </div>
          <div className="flex-1 border-l-2 border-white p-2 flex flex-col">
            <p className="text-left text-sm">
              GST No.: {rowData?.gst_no}
            </p>
            <p className="text-left text-sm">
              Address: {rowData.address}
            </p>
          </div>
          <div className="flex-1 border-l-2 border-white p-2 flex flex-col">
            <div className="text-left mt-1">
              {actionBodyResponsiveTemplate(rowData)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {commonLoading && <Loader />}
      <CommonDataTable
        tableName="Purchase List"
        tableColumns={tableColumns}
        allItemList={allPurchaseListData}
        handleChangeSearch={handleChangeSearch}
        searchParam={searchParam}
        handleAddItem={handleAddItem}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
        responsiveTableTemplete={responsiveTableTemplete}
        deleteItemDialog={deletePurchaseDialog}
        hideDeleteDialog={hidePurchaseDeleteDialog}
        deleteItem={handleDeletePurchaseItem}
        pageLimit={pageLimit}
        onPageChange={onPageChange}
        onPageRowsChange={onPageRowsChange}
        currentPage={currentPage}
      />
    </>
  )
}

export default PurchaseList;
