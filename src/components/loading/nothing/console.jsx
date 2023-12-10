import React, { useEffect } from "react";
import "./console.css";
export default Console;

function Console() {
  let empty = [];
  let myShow = [
    "Host Name:                 USER",
    ">OS Name:                   Microsoft Windows 8.1 Pro",
    ">OS Version:                6.3.9600 N/A Build 9600",
    ">OS Manufacturer:           Microsoft Corporation",
    "OS Configuration:          Standalone Workstation",
    "OS Build Type:             Multiprocessor Free",
    " Registered Owner:          admin<",
    " Registered Organization:",
    "> Product ID:                00260-00591-66009-AA910",
    "> Original Install Date:     11/28/2023, 5:51:11 PM<",
    ">System Boot Time:          12/10/2023, 12:45:42 AM",
    "System Manufacturer:       Hewlett-Packard",
    "System Model:              HP Pavilion g7 Notebook PC",
    "System Type:               x64-based PC",
    ">Processor(s):              1 Processor(s) Installed.",
    ">                        [01]: Intel64 Family 6 Model 58 Stepping 9 GenuineInt",
    ">el ~1200 Mhz",
    "BIOS Version:              Insyde F.26, 6/3/2014",
    "Windows Directory:         C:Windows",
    "System Directory:          C:Windowssystem32",
    "Boot Device:               DeviceHarddiskVolume2",
    "System Locale:             en-us;English (United States)",
    "Input Locale:              en-us;English (United States)",
    ">Time Zone:                 (UTC-08:00) Pacific Time (US & Canada)",
    "Total Physical Memory:     3,988 MB",
    "Available Physical Memory: 961 MB",
    "Virtual Memory: Max Size:  6,571 MB",
    "Virtual Memory: Available: 2,227 MB",
    ">Virtual Memory: In Use:    4,344 MB<",
    ">Page File Location(s):     C:pagefile.sys",
    ">Domain:                    WORKGROUP",
    "Logon Server:              MicrosoftAccount<",
    "Hotfix(s):                 170 Hotfix(s) Installed.",
    "                       [01]: KB2899189_Microsoft-Windows-CameraCodec-Package",
    ">Network Card(s):           2 NIC(s) Installed.",
    "                       [01]: Realtek PCIe FE Family Controller",
    "                               Connection Name: Ethernet",
    "                               Status:          Media disconnected",
    "                      [02]: Ralink RT3290 802.11bgn Wi-Fi Adapter",
    "                                Connection Name: Wi-Fi",
    "                                DHCP Enabled:    Yes",
    "                               DHCP Server:     192.168.1.1<",
    "                                IP address(es)",
    "                               [01]: 192.168.1.12",
    "                                [02]: fe80::94fe:68f6:1de6:669c",
    "                                [03]: 2a02:2a56:1cff::4",
    " Hyper-V Requirements:      VM Monitor Mode Extensions: Yes",
    "                        Virtualization Enabled In Firmware: No",
    "                        Second Level Address Translation: Yes",
    "                     Data Execution Prevention Available: Yes",
  ];

  return (
    <div className="all-console">
      <div className="top">
        <p>cmd_{"<"}</p>
      </div>
      <div className="consoleMain">
        <div className="console-text">
          {
            // setInterval(() => {
            //   return <p>{'hello'}</p>
            // }, '1000')
          }
          {myShow.map((el, index) => {
            return <p style={{ color: "green" }}>{el}</p>;
          })}
        </div>
      </div>
      <span class="loader"></span>
    </div>
  );
}
