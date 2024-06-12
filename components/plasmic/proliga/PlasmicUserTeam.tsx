// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: Frl2YSBYx07V

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: TKT8XnZtrLZi/component
import SideBarMyTeam from "../../SideBarMyTeam"; // plasmic-import: 7ylFTnxhQETY/component
import SoccerPlaceMens from "../../SoccerPlaceMens"; // plasmic-import: w6mcybgJxhpK/component
import PlayerPickerRow from "../../PlayerPickerRow"; // plasmic-import: NaQtMjgilBY9/component
import Footer from "../../Footer"; // plasmic-import: kIdovXGtWiEz/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariants_8Rmrqs5Mzp6I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8Rmrqs5Mzp6I/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicUserTeam.module.css"; // plasmic-import: Frl2YSBYx07V/css

createPlasmicElementProxy;

export type PlasmicUserTeam__VariantMembers = {};
export type PlasmicUserTeam__VariantsArgs = {};
type VariantPropType = keyof PlasmicUserTeam__VariantsArgs;
export const PlasmicUserTeam__VariantProps = new Array<VariantPropType>();

export type PlasmicUserTeam__ArgsType = {};
type ArgPropType = keyof PlasmicUserTeam__ArgsType;
export const PlasmicUserTeam__ArgProps = new Array<ArgPropType>();

export type PlasmicUserTeam__OverridesType = {
  root?: Flex__<"div">;
  h1?: Flex__<"h1">;
  navbar?: Flex__<typeof Navbar>;
  info?: Flex__<"div">;
  main?: Flex__<"div">;
  sidebar?: Flex__<"div">;
  sideBarMyTeam?: Flex__<typeof SideBarMyTeam>;
  match?: Flex__<"div">;
  soccerPlaceMens?: Flex__<typeof SoccerPlaceMens>;
  matches?: Flex__<"div">;
  playerPickerRow?: Flex__<typeof PlayerPickerRow>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultUserTeamProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUserTeam__RenderFunc(props: {
  variants: PlasmicUserTeam__VariantsArgs;
  args: PlasmicUserTeam__ArgsType;
  overrides: PlasmicUserTeam__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "7cfc5736-7526-4c0b-8c60-aee6bff90097",
        userArgs: {
          filters: [$ctx.params.id]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getOne";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.7cfc5736-7526-4c0b-8c60-aee6bff90097.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8Rmrqs5Mzp6I()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $queries.query.data[0].name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Page title";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </h1>
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <Stack__
            as={"div"}
            data-plasmic-name={"info"}
            data-plasmic-override={overrides.info}
            hasGap={true}
            className={classNames(projectcss.all, sty.info)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nRyMi
              )}
            >
              {"Team "}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hdBPx
              )}
            >
              {"Points"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cUaHu
              )}
            >
              {"Balance"}
            </div>
          </Stack__>
          <div
            data-plasmic-name={"main"}
            data-plasmic-override={overrides.main}
            className={classNames(projectcss.all, sty.main)}
          >
            <div
              data-plasmic-name={"sidebar"}
              data-plasmic-override={overrides.sidebar}
              className={classNames(projectcss.all, sty.sidebar)}
            >
              <SideBarMyTeam
                data-plasmic-name={"sideBarMyTeam"}
                data-plasmic-override={overrides.sideBarMyTeam}
                className={classNames("__wab_instance", sty.sideBarMyTeam)}
              />
            </div>
            <div
              data-plasmic-name={"match"}
              data-plasmic-override={overrides.match}
              className={classNames(projectcss.all, sty.match)}
            >
              <SoccerPlaceMens
                data-plasmic-name={"soccerPlaceMens"}
                data-plasmic-override={overrides.soccerPlaceMens}
                className={classNames("__wab_instance", sty.soccerPlaceMens)}
                goaImage={
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--288a5800-1fc0-46fc-a385-c1831ec1c73a/_330734572556.app.png?preferwebp=true&width=312"
                }
                goaName={"Ramos"}
              />
            </div>
            <div
              data-plasmic-name={"matches"}
              data-plasmic-override={overrides.matches}
              className={classNames(projectcss.all, sty.matches)}
            >
              <PlayerPickerRow
                data-plasmic-name={"playerPickerRow"}
                data-plasmic-override={overrides.playerPickerRow}
                className={classNames("__wab_instance", sty.playerPickerRow)}
              />
            </div>
          </div>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "h1",
    "navbar",
    "info",
    "main",
    "sidebar",
    "sideBarMyTeam",
    "match",
    "soccerPlaceMens",
    "matches",
    "playerPickerRow",
    "footer"
  ],
  h1: ["h1"],
  navbar: ["navbar"],
  info: ["info"],
  main: [
    "main",
    "sidebar",
    "sideBarMyTeam",
    "match",
    "soccerPlaceMens",
    "matches",
    "playerPickerRow"
  ],
  sidebar: ["sidebar", "sideBarMyTeam"],
  sideBarMyTeam: ["sideBarMyTeam"],
  match: ["match", "soccerPlaceMens"],
  soccerPlaceMens: ["soccerPlaceMens"],
  matches: ["matches", "playerPickerRow"],
  playerPickerRow: ["playerPickerRow"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  navbar: typeof Navbar;
  info: "div";
  main: "div";
  sidebar: "div";
  sideBarMyTeam: typeof SideBarMyTeam;
  match: "div";
  soccerPlaceMens: typeof SoccerPlaceMens;
  matches: "div";
  playerPickerRow: typeof PlayerPickerRow;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUserTeam__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUserTeam__VariantsArgs;
    args?: PlasmicUserTeam__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUserTeam__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUserTeam__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicUserTeam__ArgProps,
          internalVariantPropNames: PlasmicUserTeam__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUserTeam__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserTeam";
  } else {
    func.displayName = `PlasmicUserTeam.${nodeName}`;
  }
  return func;
}

export const PlasmicUserTeam = Object.assign(
  // Top-level PlasmicUserTeam renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    navbar: makeNodeComponent("navbar"),
    info: makeNodeComponent("info"),
    main: makeNodeComponent("main"),
    sidebar: makeNodeComponent("sidebar"),
    sideBarMyTeam: makeNodeComponent("sideBarMyTeam"),
    match: makeNodeComponent("match"),
    soccerPlaceMens: makeNodeComponent("soccerPlaceMens"),
    matches: makeNodeComponent("matches"),
    playerPickerRow: makeNodeComponent("playerPickerRow"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicUserTeam
    internalVariantProps: PlasmicUserTeam__VariantProps,
    internalArgProps: PlasmicUserTeam__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicUserTeam;
/* prettier-ignore-end */